import React from "react";
import { css } from "emotion";

const Thumbnail = ({ width, height, colors }) => (
  <div
    className={css`
      display: inline-block;
      color: #ccc;
      width: ${width}px;
      height: ${height}px;
      border-width: ${height/2}px ${width/2}px;
      border-style: solid;
      border-color: ${colors.top} ${colors.right} ${colors.bottom} ${colors.left};
    `}
  ></div>
);

export default Thumbnail;
