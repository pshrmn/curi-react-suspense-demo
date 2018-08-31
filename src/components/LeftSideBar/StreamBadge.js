import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

import Spinner from "../Spinner";
import Thumbnail from '../Thumbnail';

const StyledLink = props => (
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

const HEADER = css`
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 150px;
`;

export default ({ stream, hidden }) => (
  <div
    className={css`
      margin: 3px 0;
    `}
  >
    <StyledLink to='Stream' params={{ username: stream.username }}>
      {navigating => (
        <React.Fragment>
          <Thumbnail width='35' height='35' colors={stream.colors} spin={navigating}/>
          {!hidden
            ? <div
                className={css`
                  margin-left: 5px;
                `}
              >
                <h4 className={HEADER}>{stream.username}</h4>
                <h5 className={HEADER}>{stream.playing.name}</h5>
              </div>
            : null
          }
        </React.Fragment>
      )}
    </StyledLink>
  </div>
);