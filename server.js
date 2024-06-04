const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const jokes = require('./jokes.json');

const app = express();
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Endpoint pour obtenir une blague aléatoire
app.get('/api/jokes/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json({ joke: jokes[randomIndex] });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
