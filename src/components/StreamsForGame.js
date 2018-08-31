import React from "react";
import { createResource } from "simple-cache-provider";

import { cache } from "../cache";
import { GAME_TIMEOUT } from "../resourceTimers";
import API from "../generators/streamState";
import StreamsList from "./lists/StreamsList";

const streamsResource = createResource(game => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.streamersPlaying(game));
    }, GAME_TIMEOUT);
  });
});

export default ({ game }) => {
  const streams = streamsResource.read(cache, game);
  return <StreamsList streams={streams} />;
};