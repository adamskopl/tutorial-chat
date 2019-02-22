import { dictionary as d } from './dictionary.js';

const app = new Vue({
  el: '#app',
  data: {
    messages: [],
    inputValue: '',
    inputPlaceholder: d.text.inputPlaceholder,
  },
  methods: {
    onInputSubmit() {
      this.messages.push(this.inputValue);
      this.socket.emit(d.events.message, this.inputValue);
    },
  },
  created() {
    this.socket = io('');
    this.socket.on(d.events.message, (m) => {
      this.messages.push(m);
    });
  },
});
