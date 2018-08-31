import React from "react";
import { css } from "emotion";

import SpinnerLink from "./SpinnerLink";

const TopBar = () => (
  <div
    className={css`
      background: #e13333;
      height: 50px;
      width: 100vw;
      text-align: left;
      padding-left: 15px;
    `}
  >
    <nav
      className={css`
      padding: 10px 0;
      
      a {
        color: #fff;
        text-decoration: none;
        margin-right: 15px;        
      }
      `}
    >
      <SpinnerLink
        to='Home'
        className={css`
          font-size: 2em;
        `}
      >
        Glitch!
      </SpinnerLink>
      <SpinnerLink to='Browse Games'>
        Browse
      </SpinnerLink>
    </nav>
  </div>
);

export default TopBar;
