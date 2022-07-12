const http = require('http');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const port = process.env.PORT || 8000;

const server = http.createServer(app);

const startServer = async () => {
  await loadPlanetsData();
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
