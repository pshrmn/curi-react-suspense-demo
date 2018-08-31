import { weightedRandomNumberGenerator } from './random';
import { word } from './loremIpsum';
import { user } from './userGenerator';
import createChat from './chatGenerator';

const viewerWeights = weightedRandomNumberGenerator([
  { w: 25, range: [0, 100] },
  { w: 35, range: [100, 1000] },
  { w: 35, range: [1000, 10000] },
  { w: 5, range: [10000, 50000] }
]);

const streamTitle = () => {
  const words = [];
  const wordCount = Math.ceil(Math.random() * 5);
  for (let w=0; w<wordCount; w++) {
    words.push(word());
  }
  return words.join(' ');
};

export const stream = id => ({
  id,
  ...user(true),
  watching: viewerWeights(),
  title: streamTitle(),
  chat: createChat()
});

