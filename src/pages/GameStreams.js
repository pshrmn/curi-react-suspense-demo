import React from "react";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import { cache } from "../cache";
import { GAME_TIMEOUT } from "../resourceTimers";
import API from "../generators/streamState";
import BrowseBase from '../components/BrowseBase';
import StreamsList from "../components/StreamsList";

const streamsResource = createResource(game => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.streamersPlaying(game));
    }, GAME_TIMEOUT);
  });
});

export default ({ response }) => {
  const { game } = response.params;
  const streams = streamsResource.read(cache, game);
  return (
    <BrowseBase>
      <h1>Browsing {game}</h1>
      <StreamsList streams={streams} />
    </BrowseBase>
  );
}