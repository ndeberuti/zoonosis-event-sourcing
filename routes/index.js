const express = require('express');
const router = express.Router();
const RegionProjection = require('../utils/regionProjection');
const EventServices = require('../services/eventService');
const EventController = require('../controllers/eventController');
const EventInstance = new EventController(new EventServices(new RegionProjection()));

const bind = (app) => {
	app.get('/event/:eventId', (req, res) => {
		EventInstance.getEvent(req, res);
	});

	app.get('/event', (req, res) => {
		EventInstance.getEvent(req, res);
	});

	app.get('/pet/:id', (req, res) => {
		EventInstance.getPetProjection(req, res);
	});

	app.get('/region/:id/upTo/:upTo', (req, res) => {
		EventInstance.getRegionProjection(req, res);
	});

	app.get('/region/:id', (req, res) => {
		EventInstance.getRegionProjection(req, res);
	});
	app.post('/event', (req, res) => {
		EventInstance.postEvent(req, res);
	});
}

module.exports = { bind };
