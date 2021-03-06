import React from "react";
import { createResource } from "react-cache";

import API from '../generators/streamState';
import { cache } from "../cache";
import { POPULAR_STREAM_TIMEOUT } from "../resourceTimers";
import StreamsList from "./lists/StreamsList";

const streamsResource = createResource(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.topStream());
    }, POPULAR_STREAM_TIMEOUT);
  });
});

export default function PopularStreams() {
  const streams = streamsResource.read(cache);
  return <StreamsList streams={streams} />;
};
