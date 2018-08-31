import { rand } from './random';

const syllables = ['org', 'orp', 'urg', 'urm', 'ge', 'gli', 'ro', 'thy', 'imf', 'oo', 'ou', 'oi', 'fa', 'bao'];

export function word() {
  const count = Math.ceil(Math.random() * 3);
  let w = '';
  for (let i=0; i<count; i++) {
    w += syllables[rand(syllables.length-1)];
  }
  return w;
}

export function sentence() {
  const delta = Math.floor(Math.random() * 10);
  const wordCount = 15 + delta;
  const words = [];
  for (let w=0; w<wordCount; w++) {
    words.push(word());
  }
  const s = `${words.join(' ')}.`;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function randomParagraph() {
  const delta = Math.floor(Math.random() * 2);
  const count = 3 + delta;
  const sentences = [];
  for (let s=0; s<count; s++) {
    sentences.push(sentence());
  }
  return sentences.join(' ');
}

export function paragraphs(count = 1) {
  const p = [];
  for (let i=0; i<count; i++) {
    p.push(randomParagraph());
  }
  return p.join('\n');
}
