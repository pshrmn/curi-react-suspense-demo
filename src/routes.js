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
    name: 'Browse',
    path: 'directory',
    response() {
      return {
        body: React.lazy(() => import("./pages/Browse")),
        title: 'Browsing Games'
      };
    },
    children: [
      {
        name: 'Browse Popular',
        path: 'all',
        response() {
          return {
            body: React.lazy(() => import("./pages/Popular")),
            title: 'Popular Streams'
          };
        }
      },
      {
        name: 'Game',
        path: 'game/:game',
        response({ match }) {
          return {
            body: React.lazy(() => import("./pages/Game")),
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
