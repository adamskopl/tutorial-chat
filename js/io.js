const Server = require('socket.io');
const d = require('./dictionary.js');

let server = null;

function init(httpServer) {
  server = Server(httpServer);
  server.on('connection', onConnection);
}

function onConnection(socket) {
  socket.on(d.events.message, onMessage.bind(null, socket));
  console.warn(`socket connected`);
}

function onMessage(socket, m) {
  socket.broadcast.emit(d.events.message, m);
}

module.exports = {
  init,
};
