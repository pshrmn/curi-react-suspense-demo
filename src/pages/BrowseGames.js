import React from "react";

import BrowseBase from '../components/BrowseBase';
import GamesList from '../components/lists/GamesList';

export default ({ response }) => (
  <BrowseBase>
    <h1>Browsing Popular Games</h1>
    <GamesList />
  </BrowseBase>
);
