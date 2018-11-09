const express = require('express');
const configMiddleware = require('./middleware');

const server = express();

configMiddleware(server);

const port = 9000;

server.listen(port, () => {
  console.log(`\n === Server Listening on Port ${port} ===`);
});
