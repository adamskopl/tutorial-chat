import { dictionary as d } from './dictionary.js';

const factoryMessage = {
  create({ text = '', nick = '' }) {
    return {
      text,
      nick,
    };
  },
  toText(o) {
    if (o.nick === '') {
      return `${d.text.nickAnonymous}: ${o.text}`;
    }
    return `${o.nick}: ${o.text}`;
  },
};

export { factoryMessage };
