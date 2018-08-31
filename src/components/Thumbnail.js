import React from "react";
import { css } from "emotion";
import { keyframes } from "react-emotion";

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Thumbnail = ({ width, height, colors, spin = false }) => (
  <div
    className={css`
      display: inline-block;
      color: #ccc;
      width: ${width}px;
      height: ${height}px;
      border-width: ${height/2}px ${width/2}px;
      border-style: solid;
      border-color: ${colors.top} ${colors.right} ${colors.bottom} ${colors.left};
      ${spin ? `animation: 1s linear 0s infinite ${spinKeyframes}` : ""}
    `}
  ></div>
);

export default Thumbnail;
// 1s linear 0s infinite animation-1q6u8dl
