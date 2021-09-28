const Events = require('../models/eventModel');
class EventServices {
	constructor(projection) {
		this.projection = projection;
	}

	getEvent(clientId) {
		let query;
		if (clientId) {
			query = Events.find({ clientId: clientId }).exec();
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


	async getregionProjection(id) {
		const events = await Events.find({ regionId: id }).exec();
		const projection = this.projection.project(events);
		return projection;
	}
}

module.exports = EventServices;
