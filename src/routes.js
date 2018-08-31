import API from './generators/streamState';

const autoResolve = pr => (
  pr.then(module => (
    // eslint-disable-next-line no-underscore-dangle
    module.__esModule && module.default
      ? module.default
      : module
  ))
);

export default [
  {
    name: 'Home',
    path: '',
    match: {
      body: () => autoResolve(import('./pages/Home')),
      featured: () => API.featuredStreams(10),
      games: () => API.topGames(10)
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: {
          featured: resolved.featured,
          games: resolved.games
        },
        title: 'Home'
      };
    }
  },
  {
    name: 'Browse',
    path: 'directory',
    match: {
      body: () => autoResolve(import('./pages/Browse')),
      games: () => API.topGames()
    },
    response({ resolved }) {
      return {
        body: resolved.body,
        data: {
          games: resolved.games
        },
        title: 'Browsing Games'
      };
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        match: {
          body: () => autoResolve(import('./pages/Popular')),
          streams: () => API.topStream()
        },
        response({ resolved }) {
          return {
            body: resolved.body,
            data: {
              streams: resolved.streams
            },
            title: 'Popular Streams'
          };
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        match: {
          body: () => autoResolve(import('./pages/Game')),
          streamers: ({ params }) => {
            try {
              return Promise.resolve({ streams: API.streamersPlaying(params.game) });
            } catch (e) {
              return Promise.resolve({ error: 'Game not found' });
            }
          }
        },
        response({ match, resolved }) {
          return {
            body: resolved.body,
            data: {
              ...resolved.streamers
            },
            title: `Browsing ${match.params.game}`
          };
        }
      }
    ]
  },
  {
    name: 'Stream',
    path: ':username',
    match: {
      body: () => autoResolve(import('./pages/Stream')),
      user: ({ params }) => {
        const user = API.stream(params.username);
        if (user) {
          return Promise.resolve({ user });
        }
        return Promise.resolve({ error: 'The requested user could not be found.' });
      }
    },
    response({ match, error, resolved }) {
      if (error) {
        return {
          error
        };
      }
      return {
        body: resolved.body,
        title: match.params.username,
        data: {
          ...resolved.user
        }
      };
    }
  }
];
