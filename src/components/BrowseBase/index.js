import React from "react";
import { css } from "emotion";

import BrowseLinks from './BrowseLinks';

export default ({ children }) => (
  <div
    className={css`
      height: calc(100vh - 50px);
      overflow-y: scroll;
    `}
  >
    <BrowseLinks />
    {children}
  </div>
);
