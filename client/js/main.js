import { dictionary as d } from './dictionary.js';
import { factoryMessage as fMessage } from './factories.js';

const app = new Vue({
  el: '#app',
  data: {
    messages: [],
    inputValue: '',
    inputPlaceholder: d.text.inputPlaceholder,
    inputValueNick: '',
    inputPlaceholderNick: d.text.inputPlaceholderNick,
  },
  methods: {
    onInputSubmit() {
      this.messages.push(this.inputValue);
      this.socket.emit(
        d.events.message,
        fMessage.create({
          text: this.inputValue,
          nick: this.inputValueNick,
        }),
      );
    },
  },
  created() {
    this.socket = io('');
    this.socket.on(d.events.message, (mObject) => {
      this.messages.push(fMessage.toText(mObject));
    });
  },
});
