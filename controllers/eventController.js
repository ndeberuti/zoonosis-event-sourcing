class EventController {
	constructor(eventServices) {
		this.eventServices = eventServices;
	}
	async getEvent(req, res) {
		try {
			const { eventId } = req.params;
			const event = await this.eventServices.getEvent(eventId);
			res.status(200).json(event);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getRegionProjection(req, res) {
		try {
			const { id, upTo } = req.params;
			const event = await this.eventServices.getRegionProjection(id, upTo);
			res.status(200).json(event);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async postEvent(req, res) {
		const { body } = req;
		const { eventId, petId, regionId, type, payload } = body;

		const event = {
			eventId,
			petId,
			regionId,
			type,
			payload,
		};

		try {
			await this.eventServices.postEvent(event);
			res.status(200).json('Added Event!');
		} catch (error) {
			res.status(500).json('Internal Error');
		}
	}
}

module.exports = EventController;
