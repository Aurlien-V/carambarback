const fs = require('fs');

exports.getRandomJoke = (req, res) => {
    fs.readFile('./data/jokes.json', (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            const jokes = JSON.parse(data);
            const joke = jokes[Math.floor(Math.random() * jokes.length)];
            res.json(joke);
        }
    });
};
