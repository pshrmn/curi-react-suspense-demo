import React from "react";

import BrowseBase from '../components/BrowseBase';
import GamesList from '../components/GamesList';

export default ({ response }) => (
  <BrowseBase>
    <h1>Browsing Popular Games</h1>
    <GamesList games={response.data.games} />
  </BrowseBase>
);
