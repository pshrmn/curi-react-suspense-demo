import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

import fmt from '../utils/numberFormat';

const FULL = css`
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

const PARTIAL = css`
  @media screen and (max-width: 1100px) {
      display: none;
  }
`;

const UserTopBar = ({ user }) => (
  <div
    className={css`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      width: 100%;
      height: 35px;
      align-items: center;
      border-bottom: 1px solid #efefef;
    `}
  >
    <div
      className={css`
        display: flex;
        flex-flow: row nowrap;
        height: 100%;
        max-width: 70%;
        overflow-x: hidden;

        > * {
          padding: 10px;
        }

        > *:hover {
          border-bottom: 3px solid #e13333;
        }
      `}
    >
      <Link
        to='Stream'
        params={{ username: user.username }}
        className={css`
          color: #2c3e50;
          text-decoration: none;
        `}
      >
        {user.username}
      </Link>
      <p className={FULL}>Videos</p>
      <p className={FULL}>Clips</p>
      <p className={FULL}>Collections</p>
      <p className={FULL}>Events</p>
      <p className={PARTIAL}>Followers {fmt(user.followers)}</p>
      <p className={FULL}>Following</p>
    </div>
    <div
      className={css`
        display: flex;
        flex-flow: row nowrap;
      
        button {
          background: #222233;
          color: #fff;
          border: 0;
          padding: 5px 10px;
          margin-right: 10px;
        }
      `}
    >
      <button>Follow</button>
      <button>Subscribe</button>
    </div>
  </div>
);

export default UserTopBar;
