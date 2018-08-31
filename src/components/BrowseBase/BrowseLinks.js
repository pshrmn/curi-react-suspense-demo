import React from "react";
import { css } from "emotion";

import ActiveLink from '../ActiveLink';

const UL = ({ children, }) => (
  <ul
    className={css`
    display: flex;
    height: 35px;
    align-items: flex-end;
    margin: 0;
    padding: 5px;
    list-style: none;
    `}
  >
    {children}
  </ul>
);

const LI = ({ children, }) => (
  <li
    className={css`
      margin-right: 10px;
    `}
  >
    {children}
  </li>
);

const A = (props) => (
  <ActiveLink
    {...props}
    className={css`
      color: #2c3e50;
    
      &.active {
        color: #e13333;
      }
    `}
  />
);

const BrowseLinks = () => (
  <nav>
    <UL>
      <LI>
        <A to='Browse Games'>
          Games
        </A>
      </LI>
      <LI>
        <A to='Browse Popular'>
          Streams
        </A>
      </LI>
    </UL>
  </nav>
);

export default BrowseLinks;
