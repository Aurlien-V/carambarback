const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const jokesRoutes = require('./routes/jokesRoutes');

const app = express();

// Utilisation de CORS pour permettre les requêtes cross-origin
app.use(cors());


const specs = swaggerJsdoc(options);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use('/jokes', jokesRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
