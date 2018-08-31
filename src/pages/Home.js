import React from "react";
import { css } from "emotion";

import Featured from '../components/Featured';
import GamesList from '../components/GamesList';

export default ({ response }) => (
  <div
    className={css`
      width: 75vw;
      max-width: 900px;
      margin: 25px auto 0;
    `}
  >
    <Featured streams={response.data.featured} />
    <div
      className={css`
        margin: 50px auto 0;
        width: 90%;
      `}
    >
      <h2>Featured Games</h2>
      <GamesList games={response.data.games} />  
    </div>
  </div>
);

