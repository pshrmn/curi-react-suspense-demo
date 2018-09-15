import React from "react";
import { css } from "emotion";

import BrowseBase from '../components/BrowseBase';
import StreamsForGame from '../components/StreamsForGame';

export default function GameStreams({ response }) {
  const { game } = response.params;
  return (
    <BrowseBase>
      <h1>Browsing {game}</h1>
      <StreamsForGame game={game} />
    </BrowseBase>
  );
}
