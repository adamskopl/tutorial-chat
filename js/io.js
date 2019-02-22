const Server = require('socket.io');
const d = require('./dictionary.js');

let server = null;

function init(httpServer) {
  server = Server(httpServer);
  server.on('connection', onConnection);
}

function onConnection(socket) {
  socket.on(d.events.message, onMessage);
  console.warn(`socket connected`);
}

function onMessage(m) {
  console.warn(`message received! ${m}`);
}

module.exports = {
  init,
};
