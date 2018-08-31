import { sentence } from './loremIpsum';


export default function() {
  let timeout;
  function randomTimeout(fn) {
    fn();
    timeout = setTimeout(() => {
      randomTimeout(fn);
    }, 2000 + Math.floor(Math.random()*500));
  }
  let id = 0;
  return {
    chatLines: [],
    start(fn) {
      randomTimeout(() => {
        this.chatLines.push({ username: 'Hal', text: sentence(), key: id++ });
        if (this.chatLines.length > 50) {
          this.chatLines.shift();
        }
        fn(this.chatLines);
      });
    },
    stop() {
      this.chatLines = [];
      clearTimeout(timeout);
    }
  };
}
