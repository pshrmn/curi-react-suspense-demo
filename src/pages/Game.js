import React from "react";
import { css } from "emotion";
import { createResource } from "simple-cache-provider";

import { cache } from "../cache";
import API from "../generators/streamState";
import BrowseBase from '../components/BrowseBase';
import StreamsList from '../components/StreamsList';

const streamsResource = createResource(game => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(API.streamersPlaying(game));
    }, 2000);
  });
});

export default ({ response }) => {
  const { game } = response.params;
  const streams = streamsResource.read(cache, game);
  return (
    <BrowseBase>
      <h1>Browsing {game}</h1>
      <div
        className={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {streams.length
          ? streams.map(stream => (
              <StreamsList
                key={stream.id}
                stream={stream}
              />
            ))
          : <p>No one is playing {game} :(</p>
        }
      </div>
    </BrowseBase>
  );
}