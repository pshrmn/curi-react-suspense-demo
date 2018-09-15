import React from "react";
import { css } from "emotion";

import BrowseLinks from './BrowseLinks';

export default function BrowseBase({ children }) {
  return (
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
}
