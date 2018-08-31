import React from "react";
import { css } from "emotion";

import SpinnerLink from '../SpinnerLink';

const UL = css`
  display: flex;
  height: 35px;
  align-items: flex-end;
  margin: 0;
  padding: 5px;
  list-style: none;
`;

const LI = css`
  margin-right: 10px;
`;

const StyledLink = (props) => (
  <SpinnerLink
    {...props}
    color="#444"
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
    <ul className={UL}>
      <li className={LI}>
        <StyledLink to='Browse Games'>
          Games
        </StyledLink>
      </li>
      <li className={LI}>
        <StyledLink to='Browse Popular'>
          Streams
        </StyledLink>
      </li>
    </ul>
  </nav>
);

export default BrowseLinks;
