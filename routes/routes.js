const express = require('express');
const routes = express.Router();
const controllers = require('../controllers/movie');
const userControllers = require('../controllers/user');
const auth = require('../controllers/auth');

routes.get('/', controllers.welcome);
routes.post('/', controllers.createMovie);
routes.get('/movies', controllers.listAllMovies);
routes.put('/movie/:id', controllers.updateMovie);
routes.delete('/movie/:id', controllers.deleteMovie);

routes.get('/signup', userControllers.signup);
routes.post('/signup', userControllers.signup_post);

routes.post('/authenticate', auth.authenticate);

module.exports = routes;