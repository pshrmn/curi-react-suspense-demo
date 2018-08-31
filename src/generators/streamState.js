import { rand } from './random';
import { game } from './gameGenerator';
import { stream } from './streamGenerator';

/* setup */
const GAMES = [];
for (let g = 0; g < 20; g++) {
  GAMES.push(game());
}

const STREAMS = [];
for (let g=0; g<100; g++) {
  const s = stream(g);
  STREAMS.push(s);

  const playing = GAMES[rand(GAMES.length)];
  s.playing = playing;
  playing.watching += s.watching;
}
/* end setup */

const emptyFilter = n => n;
const mostWatchers = (a, b) => b.watching - a.watching;

export default {
  /* games */
  games(filter, sort) {
    const filtered = GAMES.filter(filter);
    if (sort) {
      filtered.sort(sort);
    }
    return filtered;
  },
  topGames(count) {
    return this.games(
      emptyFilter,
      mostWatchers
    ).slice(0, count);
  },
  /* streamers */
  stream(username) {
    return STREAMS.find(u => u.username === username);
  },
  streams(filter = emptyFilter, sort) {
    const filtered = STREAMS.filter(filter);
    if (sort) {
      filtered.sort(sort);
    }
    return filtered;
  },
  topStream(count) {
    return this.streams(
      emptyFilter,
      mostWatchers
    ).slice(0, count);
  },
  featuredStreams(count) {
    return this.streams(
      emptyFilter,
      () => (Math.random() > 0.5 ? 1 : -1)
    ).slice(0, count);
  },
  streamersPlaying(name) {
    return this.streams(
      s => s.playing.name === name,
      mostWatchers
    );
  }
};
