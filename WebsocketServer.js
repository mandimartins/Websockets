const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
  res.end('Connected.');
});

const wss = new websocket.Server({
  server,
});

server.listen(5000);
