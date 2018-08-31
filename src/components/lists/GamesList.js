import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import { cache } from "../../cache";
import { POPULAR_GAMES_TIMEOUT } from "../../resourceTimers";
import API from '../../generators/streamState';
import Details from './Details';
import Thumbnail from "../Thumbnail";
import fmt from "../../utils/numberFormat";

const gamesResource = createResource(count => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.topGames(count))
    }, POPULAR_GAMES_TIMEOUT);
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
        <Details
          key={game.id}
          to="Game"
          params={{ game: game.name }}
          colors={game.colors}
        >
          <p
            className={css`
              display: block;
              text-decoration: none;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            `}
          >
            {game.name}
          </p>
          <p
            className={css`
              color: #999;
              font-size: 0.9em;
            `}
          >
            {fmt(game.watching)} Viewers
          </p>
        </Details>
      ))}
    </div>
  );
}
