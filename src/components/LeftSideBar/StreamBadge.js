import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

import Thumbnail from '../Thumbnail';

const A = props => (
  <Link
    {...props}
    className={css`
      color: #fff;
      text-decoration: none;
      display: flex;
      flex-flow: row nowrap;
    `}
  />
);

const Header = ({ tag='h4', ...rest }) => (
  React.createElement(tag,
    {
      ...rest,
      className: css`
        font-weight: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 150px;
      `
    }
  )
);

export default ({ stream, hidden }) => (
  <div
    className={css`
      margin: 3px 0;
    `}
  >
    <A to='Stream' params={{ username: stream.username }}>
      <Thumbnail width='35' height='35' colors={stream.colors} />
      {!hidden
        ? <div
            className={css`
              margin-left: 5px;
            `}
          >
            <Header tag="h4">{stream.username}</Header>
            <Header tag="h5">{stream.playing.name}</Header>
          </div>
        : null
      }
      
    </A>
  </div>
);