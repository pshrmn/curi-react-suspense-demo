import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import { cache } from "../cache";
import API from '../generators/streamState';

import Thumbnail from "./Thumbnail";
import fmt from "../utils/numberFormat";

const gamesResource = createResource(count => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.topGames(count))
    }, 1000);
  });
});

export default ({ count }) => {
  const games = gamesResource.read(cache, count);
  return (
    <div
      className={css`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {games.map(game => (
        <div
          key={game.id}
          className={css`
            width: 150px;
            margin: 0 10px 10px 0;
          `}
        >
          <div>
            <Link to='Game' params={{ game: game.name }}>
              <Thumbnail
                width='150'
                height='200'
                colors={game.colors}
              />
            </Link>
          </div>
          <div>
            <Link
              to='Game'
              params={{ game: game.name }}
              className={css`
                color: #2c3e50;
                display: block;
                text-decoration: none;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              `}
            >
              {game.name}
            </Link>
            <p
              className={css`
                color: #999;
                font-size: 0.9em;
              `}
            >
              {fmt(game.watching)} Viewers
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
