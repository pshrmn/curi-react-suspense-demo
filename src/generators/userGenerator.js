import { rand, weightedRandomNumberGenerator } from './random';
import { sentence } from './loremIpsum';
import colors from './colorGenerator';

const adjectives = [
  'Cool',
  'Awesome',
  'Nice',
  'Happy',
  'Sad',
  'Angry',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet',
  'Ace',
  'Top',
  'Super',
  'Evil',
  'Giant',
  'Tiny',
  'Secret',
  'Mysterious',
  'Random'
];

const nouns = [
  'Lizard',
  'Frog',
  'Toad',
  'Bear',
  'Lion',
  'Tiger',
  'Wolf',
  'Dog',
  'Cat',
  'Fish',
  'Octopus',
  'Monkey',
  'Gorilla',
  'Captain',
  'Noob',
  'Pro',
  'Player',
  'Alien'
];

function randomAdjective() {
  return adjectives[rand(adjectives.length)];
}

function streamName() {
  const adj = randomAdjective();
  const noun = nouns[rand(nouns.length)];
  return `${adj}${noun}${Math.random() > 0.5 ? rand(10000) : ''}`;
}

const followerCount = weightedRandomNumberGenerator([
  { w: 15, range: [0, 1000] },
  { w: 25, range: [1000, 25000] },
  { w: 25, range: [25000, 100000] },
  { w: 20, range: [100000, 500000] },
  { w: 15, range: [500000, 2500000] }
]);

export const user = (isStreamer = false) => ({
  username: streamName(),
  followers: isStreamer
    ? followerCount()
    : Math.floor(Math.random()*25),
  description: isStreamer ? sentence() : '',
  colors: colors()
});

