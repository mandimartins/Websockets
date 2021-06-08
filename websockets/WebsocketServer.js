const http = require('http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
  res.end('Connected.');
});

const wss = new websocket.Server({
  server,
});

wss.on('headers', (headers, req) => {
  console.log(headers);
  //websocket handshaking
});

wss.on('connection', (ws, req) => {
  ws.send('Connection OK');
  ws.on('message', (msg) => [console.log(msg)]);
});

server.listen(5000);
