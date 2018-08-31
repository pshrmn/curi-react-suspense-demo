import React from "react";
import { css } from "emotion";

import BrowseBase from '../components/BrowseBase';
import StreamsList from '../components/StreamsList';

export default ({ response }) => (
  response.data.error
    ? <div>
        {response.data.error}
      </div>
    : <BrowseBase>
        <h1>Browsing {response.params.game}</h1>
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
