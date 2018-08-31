import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

import Thumbnail from '../components/Thumbnail';
import fmt from '../utils/numberFormat';

const StreamsList = ({ stream }) => (
  <div
    className={css`
      width: 150px;
      margin: 0 10px 10px 0;
    `}
  >
    <div>
      <Link to='Stream' params={{ username: stream.username }}>
        <Thumbnail
          width='150'
          height='200'
          colors={stream.colors}
        />
      </Link>
    </div>
    <div>
      <Link
        to='Stream'
        params={{ username: stream.username}}
        className={css`
          color: #2c3e50;
          display: block;
          text-decoration: none;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `}
      >
        {stream.username}
      </Link>
      <p
        className={css`
          color: #999;
          font-size: 0.9em;
        `}
      >
        {fmt(stream.watching)} Viewers
      </p>
    </div>
  </div>
);

export default StreamsList;
