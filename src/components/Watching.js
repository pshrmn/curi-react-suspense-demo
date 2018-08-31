import React from "react";
import { css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';

import fmt from '../utils/numberFormat';

const Watching = ({ count }) => (
  <div
    className={css`
      color: #e13333;
    `}
  >
    <FontAwesomeIcon icon={faUser} /> {fmt(count)}
  </div>
);

export default Watching;
