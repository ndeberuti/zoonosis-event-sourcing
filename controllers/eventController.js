class EventController {
	constructor(eventServices) {
		this.eventServices = eventServices;
	}
	async getEvent(req, res) {
		try {
			const { eventId } = req.query;
			const event = await this.eventServices.getEvent(eventId);
			res.status(200).json(event);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getPetProjection(req, res) {
		try {
			const { id } = req.params;
			const event = await this.eventServices.getPetProjection(id);
			res.status(200).json(event);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getRegionProjection(req, res) {
		try {
			const { id } = req.params;
			const event = await this.eventServices.getRegionProjection(id);
			res.status(200).json(event);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async postEvent(req, res) {
		const { body } = req;
		const { petId, type, item } = body;

		const event = {
			petId,
			type,
			item,
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
