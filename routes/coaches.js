const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const Coach = require('../models/Coach');
const config = require('config')
/* GET coaches listing. */
router.get('/', async (req, res, next) => {
		try {
			const coaches = await Coach.find({});
			res.send(coaches);
		} catch (error) {
			console.error(error);
			res.json({ msg: 'Server error' });
		}
	});

// @POST /
// Make new coach
// Private
router.post('/',auth, async (req, res, next) => {
	for(let admin of config.get('admins')){
		if(req.user.id !== admin)
		return res.json({msg: 'Admins only.'})
	}
	try {
		const coach = new Coach(req.body.coach);
		await coach.save();
	} catch (error) {
		console.error(error);
		return res.json({ msg: 'Server error' });
	}
	res.json({ msg: 'Success' });
});

module.exports = router;
