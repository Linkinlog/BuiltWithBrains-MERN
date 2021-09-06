const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const CoachSchema = Schema({
	name : {
		type: String,
		required: true
	},
	URL : {
		type: String,
		required: false
	},
	specialty : {
		type: String,
		required: false
	},
	years : {
		type: Number,
		required: false
	}	
})

module.exports = model('Coach', CoachSchema);