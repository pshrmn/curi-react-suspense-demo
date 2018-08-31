import React from "react";
import { css } from "emotion";

import BrowseBase from '../components/BrowseBase';
import StreamsList from '../components/StreamsList';

export default ({ response }) => (
  <BrowseBase>
    <h1>Browsing Popular Streams</h1>
    <div
      className={css`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {response.data.streams.map(stream => (
        <StreamsList
          key={stream.id}
          stream={stream}
        />
      ))}
    </div>
  </BrowseBase>
);
