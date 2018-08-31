import { rand } from './random';

const colors = [
  // reds
  '#d32f2f',
  '#ec407a',
  // oranges
  '#e64a19',
  '#ef6c00',
  // yellows
  '#fff59d',
  '#ffca28',
  // greens
  '#4caf50',
  '#558b2f',
  // blues
  '#3f51b5',
  '#81d4fa',
  // purples
  '#6a1b9a',
  '#9575cd'
];

export default function() {
  return {
    top: colors[rand(colors.length)],
    right: colors[rand(colors.length)],
    bottom: colors[rand(colors.length)],
    left: colors[rand(colors.length)]
  };
}
