const express = require('express');
const routes = express.Router();
const controllers = require('../controllers/movie');
const userController = require('../controllers/user');

routes.get('/', controllers.welcome);
routes.post('/', controllers.createMovie);
routes.get('/movies', controllers.listAllMovies);
routes.put('/movie/:id', controllers.updateMovie);
routes.delete('/movie/:id', controllers.deleteMovie);

routes.get('/signup', userController.signup);

module.exports = routes;