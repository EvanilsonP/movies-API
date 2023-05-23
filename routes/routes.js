const express = require('express');
const routes = express.Router();
const controllers = require('../controllers/movie');
const userControllers = require('../controllers/user');
const authenticate = require('../controllers/login');
const auth = require('../middlewares/auth');

routes.get('/', controllers.welcome);
routes.post('/', auth, controllers.createMovie);
routes.get('/movies', auth, controllers.listAllMovies);
routes.put('/movie/:id', auth, controllers.updateMovie);
routes.delete('/movie/:id', auth, controllers.deleteMovie);

routes.get('/signup', userControllers.signup);
routes.post('/signup', userControllers.signup_post);

routes.post('/login', authenticate.login);

module.exports = routes;