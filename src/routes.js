import React from "react";
import API from './generators/streamState';

export default [
  {
    name: 'Home',
    path: '',
    response() {
      return {
        body: React.lazy(() => import("./pages/Home")),
        title: 'Home'
      };
    }
  },
  {
    name: 'Browse Games',
    path: 'directory',
    response() {
      return {
        body: React.lazy(() => import("./pages/BrowseGames")),
        title: 'Browsing Games'
      };
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        response() {
          return {
            body: React.lazy(() => import("./pages/PopularStreams")),
            title: 'Popular Streams'
          };
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        response({ match }) {
          return {
            body: React.lazy(() => import("./pages/GameStreams")),
            title: `Browsing ${match.params.game}`
          };
        }
      }
    ]
  },
  {
    name: 'Stream',
    path: ':username',
    response({ match }) {
      return {
        body: React.lazy(() => import("./pages/Stream")),
        title: match.params.username
      };
    }
  }
];
