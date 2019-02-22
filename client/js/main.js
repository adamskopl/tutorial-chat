import { dictionary as d } from './dictionary.js';

const socket = io('');

socket.emit(d.events.message, 'TEST MESSAGE');
