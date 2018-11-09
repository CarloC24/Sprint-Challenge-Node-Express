const express = require('express');
const configMiddleware = require('./middleware');
const actionRoutes = require('./actionroutes');
const projectRoutes = require('./projectroutes');

const server = express();

configMiddleware(server);
server.use('/actions', actionRoutes);
server.use('/projects', projectRoutes);

const port = 9000;

server.listen(port, () => {
  console.log(`\n === Server Listening on Port ${port} ===`);
});
