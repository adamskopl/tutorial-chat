import { dictionary as d } from './dictionary.js';

const app = new Vue({
  el: '#app',
  data: {
    messages: [],
  },
  created() {
    this.socket = io('');
    this.socket.emit(d.events.message, 'TEST MESSAGE');
    this.socket.on(d.events.message, (m) => {
      this.messages.push(m);
    });
  },
});
