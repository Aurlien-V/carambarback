const express = require('express');
const jokesController = require('../controllers/jokesController');

const router = express.Router();

router.get('/random', jokesController.getRandomJoke);

module.exports = router;
