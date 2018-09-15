import React from "react";
import { css } from "emotion";

import BrowseBase from '../components/BrowseBase';
import PopularStreams from "../components/PopularStreams";

export default function PopularStreams({ response }) {
  return (
    <BrowseBase>
      <h1>Browsing Popular Streams</h1>
      <PopularStreams />
    </BrowseBase>
  );
}
