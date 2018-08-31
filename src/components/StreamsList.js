import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

import Details from '../components/Details';
import Thumbnail from "./Thumbnail";
import fmt from '../utils/numberFormat';

export default ({ streams }) => {
  return (
    <div
      className={css`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {streams.length
        ? streams.map(stream => (
            <Details
              key={stream.id}
              to="Stream"
              params={{ username: stream.username }}
              colors={stream.colors}
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
                {stream.username}
              </p>
              <p
                className={css`
                  color: #999;
                  font-size: 0.9em;
                `}
              >
                {fmt(stream.watching)} Viewers
              </p>
            </Details>
          ))
        : <p>No one is streaming :(</p>
      }
    </div>
  );
}
