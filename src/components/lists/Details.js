import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";
import Spinner from "react-spinkit";

import Thumbnail from '../Thumbnail';

const Details = ({ to, params, colors, children }) => (
  <div
    className={css`
      width: 150px;
      margin: 0 10px 10px 0;
      position: relative;
    `}
  >
    <Link
      to={to}
      params={params}
      className={css`
        text-decoration: none;
        color: #2c3e50;
        display: block;
      `}
    >
      {navigating => (
        <React.Fragment>
          {navigating
            ? <div
                className={css`
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 150px;
                  height: 200px;
                  background: rgba(255, 255, 255, 0.5);
                `}
              >
                <Spinner
                  name="pulse"
                  fadeIn="none"
                  className={css`
                    position: absolute;
                    left: 60px;
                    top: 90px;
                  `}
                />
              </div>
            : null
          }
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
          </div>
        </React.Fragment>
      )}
    </Link>
  </div>
);

export default Details;
