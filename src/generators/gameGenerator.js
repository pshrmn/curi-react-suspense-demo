import { rand } from './random';
import colors from './colorGenerator';

const starterNouns = [
  'Smell',
  'Taste',
  'Sight',
  'Sound',
  'Feeling',
  'Break',
  'Spin',
  'Dive',
  'Call',
  'Burn',
  'Unite',
  'Hope',
  'Spirit'
];

const prepositions = [
  'of',
  'for',
  'in',
  'under',
  'towards',
  'before'
];

const endNouns = [
  'Water',
  'Land',
  'Freedom',
  'Victory',
  'Justice',
  'Fun',
  'Unity',
  'Strength',
  'Hope',
  'Sky',
  'Space',
  'Jungle'
];
let id = 0;

export function game() {
  const name = [
    starterNouns[rand(starterNouns.length)],
    prepositions[rand(prepositions.length)],
    endNouns[rand(endNouns.length)]
  ].join(' ');
  return {
    id: id++,
    name,
    watching: 0,
    colors: colors()
  };
}
