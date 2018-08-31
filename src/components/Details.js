import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";
import Spinner from "react-spinkit";

import Thumbnail from './Thumbnail';

const Details = ({ to, params, colors, children }) => (
  <div
    className={css`
      width: 150px;
      margin: 0 10px 10px 0;
    `}
  >
    <Link
      to={to}
      params={params}
      className={css`
        text-decoration: none;
        color: #2c3e50;
      `}
    >
      {navigating => (
        <React.Fragment>
          <Thumbnail
            width='150'
            height='200'
            colors={colors}
          />
          <div
            className={css`
              display: flex;
              flex-flow: row nowrap;
            `}
          >
            <div>
              {children}
            </div>
            {navigating ? <Spinner name="pulse" fadeIn="none" /> : null}
          </div>
        </React.Fragment>
      )}
    </Link>
  </div>
);

export default Details;