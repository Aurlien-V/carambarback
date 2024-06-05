const jokes = require('./../db/jokes');

exports.getRandomJoke = (req, res) => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
};
