const Joke = require('../models/joke');

exports.getRandomJoke = async (req, res) => {
  const jokes = await Joke.findAll();
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
};

