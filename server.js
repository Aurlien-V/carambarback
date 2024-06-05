const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const jokeRoutes = require('./routes/jokes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

// Utilisation de CORS pour permettre les requêtes cross-origin
app.use(cors());


app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/jokes', jokeRoutes);


app.listen(3000, () => console.log('Server running on port 3000'));
