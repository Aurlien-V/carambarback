const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeControllers');

router.get('/random', jokeController.getRandomJoke);

module.exports = router;
