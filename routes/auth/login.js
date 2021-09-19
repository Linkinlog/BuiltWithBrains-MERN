const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const config = require('config')


// @GET '/api/login'
// Get logged in user
// Private
router.get('/', auth, async (req, res, next) => {
	try {
		const user = await User.findById(req.user.id).select('-password');
		return res.json(user);
	} catch (error) {
		console.error(error.message);
		return res.status(500).send('Server error');
	}
});

// @POST '/api/login'
// Log in user
// Public
router.post('/', [check('username', 'Username is required').exists(), check('password', 'password is required').exists()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ msg: 'Invalid Credentials!' });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ msg: 'Invalid Credentials!' });
		}
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 3600,
			},
			(err, token) => {
				if (err) throw err;
				return res.json({ token });
			}
		);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Server error');
	}
});

// @POST '/api/login/register'
// Register a new user
// Public
router.post('/register', [check('username', 'Please enter a valid username').not().isEmpty(), check('password', 'Please enter a password').not().isEmpty()], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { username, email, password } = req.body;

	try {
		let user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ msg: 'User already exists' });
		}

		user = new User({
			username,
			email,
			password,
		});
		const salt = await bcrypt.genSalt(10);

		user.password = await bcrypt.hash(password, salt);
		await user.save();

		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 3600,
			},
			(err, token) => {
				if (err) throw err;
				return res.json({ token });
			}
		);
	} catch (error) {
		console.log(error.message);
		return res.status(500).send('Server error');
	}
});

module.exports = router;
