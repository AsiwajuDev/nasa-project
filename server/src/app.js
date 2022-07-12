const express = require('express');
const cors = require('cors');

// Import the router
const planetsRouter = require('./routes/planets/planets.router');

const app = express();
// configure cors
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

// Use the router for all requests
app.use(planetsRouter);

module.exports = app;
