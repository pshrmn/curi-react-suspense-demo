import React from "react";
import { createResource } from "react-cache";

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

export default function StreamsForGame({ game }) {
  const streams = streamsResource.read(cache, game);
  return <StreamsList streams={streams} />;
};
