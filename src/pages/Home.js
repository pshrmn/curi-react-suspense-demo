import React from "react";
import { css } from "emotion";

import Featured from '../components/Featured';
import GamesList from '../components/lists/GamesList';

export default function Home({ response }) {
  return (
    <div
      className={css`
        width: 75vw;
        max-width: 900px;
        margin: 25px auto 0;
      `}
    >
      <Featured />
      <div
        className={css`
          margin: 50px auto 0;
          width: 90%;
        `}
      >
        <h2>Featured Games</h2>
        <GamesList count={10} />
      </div>
    </div>
  );
}
