const express = require('express');
const router = express.Router();
const Projection = require('../utils/petProjection');
const EventServices = require('../services/eventService');
const EventController = require('../controllers/eventController');
const EventInstance = new EventController(new EventServices(new Projection()));

router.get('/event', (req, res) => {
	EventInstance.getEvent(req, res);
});
router.get('/pet/:id', (req, res) => {
	EventInstance.getPetProjection(req, res);
});

router.get('/region/:id', (req, res) => {
	EventInstance.getRegionProjection(req, res);
});
router.post('/event', (req, res) => {
	EventInstance.postEvent(req, res);
});

module.exports = router;
