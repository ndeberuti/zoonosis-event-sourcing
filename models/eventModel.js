const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
	eventid: {
		type: String,
		required: true
	},
	petId: {
		type: String,
		required: true,
	},
	regionId: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true,
	},
	payload: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Event', eventSchema);
