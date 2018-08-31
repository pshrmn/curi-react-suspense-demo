import React from "react";
import { css } from "emotion";
import { keyframes } from "react-emotion";

const spin = keyframes`
  0% {
    rotate(0deg);
  }

  50% {
    rotate(180deg);
  }

  100% {
    rotate(360deg);
  }
`;

export default ({ children }) => (
  <div
    className={css`
      animation: 1s linear 0s infinite ${spin};
      color: orange;
      width: 25px;
      height: 25px;
    `}
  >
    {children}
  </div>
);
