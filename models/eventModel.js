const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
	eventId: {
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
		type: Object,
		required: true,
	},
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
