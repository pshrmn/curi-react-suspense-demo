import React from "react";
import { css } from "emotion";
import SpinnerLink from "../SpinnerLink";

import Thumbnail from '../Thumbnail';

const StyledLink = props => (
  <SpinnerLink
    {...props}
    className={css`
      color: #ff6868
    `}
  />
);

const FakeVideo = props => (
  <div
    {...props}
    className={css`
      width: 600px;
      height: 350px;
      background: #8a2b33;
      flex-shrink: 0;
    
    
      @media screen and (max-width: 1080px) {
        width: 100%;
        margin-bottom: 5px;
      }
    `}
  />
);

export default ({ stream }) => (
  <div
    className={css`
      display: flex;
      flex-flow: row nowrap;
      margin-bottom: 10px;

      @media screen and (max-width: 1080px) {
        flex-flow: column nowrap;
      }
    `}
  >
    <FakeVideo />
    <div
      className={css`
        color: #efefef;
        padding: 0 15px;
        min-width: 0;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        `}
      >
        <Thumbnail
          width='50'
          height='50'
          colors={stream.colors}
        />
        <div
          className={css`
            padding-left: 5px;
            min-width: 0;

            h2 {
              font-size: 1.1em;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            h3 {
              font-size: 1em;
            }
          `}
        >
          <h2>
            {stream.username}
          </h2>
          <h3>
            Playing{" "}
            <StyledLink to='Game' params={{ game: stream.playing.name }}>
              {stream.playing.name}
            </StyledLink>
          </h3>
        </div>
      </div>
      <p>
        {stream.description}
        <StyledLink to='Stream' params={{ username: stream.username }}>
          Start watching!
        </StyledLink>
      </p>
    </div>
  </div>
);
