import {} from './pageLogin.js';
import {} from './pageChat.js';

const app = new Vue({
  el: '#app',
  data: {
    nick: '',
  },
  methods: {
    onNickChosen(nick) {
      this.nick = nick;
    },
  },
  created() {
    this.socket = io('');
  },
});
