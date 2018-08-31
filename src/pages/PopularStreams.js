import React from "react";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import API from '../generators/streamState';
import { cache } from "../cache";
import { POPULAR_STREAM_TIMEOUT } from "../resourceTimers";
import BrowseBase from '../components/BrowseBase';
import StreamsList from "../components/StreamsList";

const streamsResource = createResource(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.topStream());
    }, POPULAR_STREAM_TIMEOUT);
  });
});

export default ({ response }) => {
  const streams = streamsResource.read(cache);
  return (
    <BrowseBase>
      <h1>Browsing Popular Streams</h1>
      <StreamsList streams={streams} />
    </BrowseBase>
  );
}
