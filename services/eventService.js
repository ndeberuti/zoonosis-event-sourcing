const Events = require('../models/eventModel');
class EventServices {
	constructor(projection) {
		this.projection = projection;
	}

	getEvent(eventId) {
		let query;
		if (eventId) {
			query = Events.find({ eventId }).exec();
		} else {
			query = Events.find().exec();
		}
		return query;
	}

	postEvent(event) {
		const newEvent = new Events(event);
		return newEvent.save();
	}

	async getPetProjection(id) {
		const events = await Events.find({ petId: id }).exec();
		const projection = this.projection.project(events);
		return projection;
	}


	async getRegionProjection(regionId, upTo) {
		let events;
		if (upTo) {
			events = await Events.find({ regionId }).where('eventId').lt(upTo).exec();
		} else {
			events = await Events.find({ regionId }).exec();
		}

		const projection = this.projection.project(events);
		return projection;
	}
}

module.exports = EventServices;
