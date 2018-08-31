import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";

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
      <Link
        to='Home'
        className={css`
          font-size: 2em;
        `}
      >
        Glitch!
      </Link>
      <Link to='Browse'>Browse</Link>
    </nav>
  </div>
);

export default TopBar;
