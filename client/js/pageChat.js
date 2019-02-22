import { dictionary as d } from './dictionary.js';
import { factoryMessage as fMessage } from './factories.js';

Vue.component('page-chat', {
  data() {
    return {
      messages: [],
      inputValue: '',
      inputPlaceholder: d.text.inputPlaceholderChat,
    };
  },
  props: ['socket', 'nick'],
  methods: {
    onInputSubmit() {
      this.messages.push(this.inputValue);
      this.socket.emit(
        d.events.message,
        fMessage.create({
          text: this.inputValue,
          nick: this.nick,
        }),
      );
    },
  },
  created() {
    this.socket.on(d.events.message, (mObject) => {
      this.messages.push(fMessage.toText(mObject));
    });
  },
  template: '#pageChat',
});
