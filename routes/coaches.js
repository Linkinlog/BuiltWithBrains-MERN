const express = require('express');
const router = express.Router();
const Coach = require('../models/Coach');

/* GET coaches listing. */
router.get('/', function (req, res, next) {
  try {
    
  } catch (error) {
    
  }
});

// @POST /
// Make new coach
// Private
router.post('/', async (req, res, next) => {
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
