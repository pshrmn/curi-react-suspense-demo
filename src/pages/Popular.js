import React from "react";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import { cache } from "../cache";
import API from "../generators/streamState";
import BrowseBase from '../components/BrowseBase';
import StreamsList from '../components/StreamsList';

const streamsResource = createResource(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.topStream());
    }, 2500);
  });
});

export default ({ response }) => {
  const streams = streamsResource.read(cache);
  return (
    <BrowseBase>
      <h1>Browsing Popular Streams</h1>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {streams.map(stream => (
          <StreamsList
            key={stream.id}
            stream={stream}
          />
        ))}
      </div>
    </BrowseBase>
  );
}
