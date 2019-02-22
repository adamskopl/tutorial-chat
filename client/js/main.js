import { dictionary as d } from './dictionary.js';

const socket = io('');

socket.emit(d.events.message, 'TEST MESSAGE');

socket.on(d.events.message, onMessage);

function onMessage(m) {
  console.warn(`message received: ${m}`);
}
