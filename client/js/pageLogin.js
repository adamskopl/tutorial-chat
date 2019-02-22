import { dictionary as d } from './dictionary.js';

Vue.component('page-login', {
  data() {
    return {
      inputValue: '',
      inputPlaceholder: d.text.inputPlaceholderNick,
    };
  },
  props: ['socket'],
  methods: {
    onInputSubmit() {
      this.$emit('nick-chosen', this.inputValue);
    },
  },
  template: '#pageLogin',
});
