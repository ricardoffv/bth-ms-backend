const express = require('express');

const ong_controller = require('./controllers/ong_controller');
const incidents_controller = require('./controllers/incident_controller');
const profile_controller = require('./controllers/profile_controller');
const session_controller = require('./controllers/session_controller');

const routes = express.Router();

routes.get('/ongs', ong_controller.get_ongs);
routes.post('/ongs', ong_controller.create);

routes.post('/sessions', session_controller.create);

routes.get('/profile', profile_controller.get_incidents);

routes.get('/incidents', incidents_controller.get_incidents);
routes.post('/incidents', incidents_controller.create);
routes.delete('/incidents/:id', incidents_controller.delete);

module.exports = routes;