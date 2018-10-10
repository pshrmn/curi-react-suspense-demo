import React from "react";
import { css } from "emotion";
import { createResource } from "react-cache";

import { cache } from "../cache";
import API from "../generators/streamState";
import { STREAM_TIMEOUT } from "../resourceTimers";
import UserTopBar from '../components/UserTopBar';
import VideoPlayer from '../components/VideoPlayer';
import Chat from '../components/Chat';

const userResource = createResource(username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const stream = API.stream(username);
        resolve(stream);
      } catch (e) {
        reject("User not found");
      }
    }, STREAM_TIMEOUT);
  });
})

export default function Stream({ response }) {
  const user = userResource.read(cache, response.params.username);
  if (!user) {
    return (
      <div
        className={css`
          display: flex;
          flex-flow: row nowrap;
        `}
      >
        User not found :(
      </div>
    )
  }

  return (
    <div
      className={css`
        display: flex;
        flex-flow: row nowrap;
      `}
    >
      <div
        className={css`
          flex-grow: 2;
        `}
      >
        <UserTopBar user={user} />
        <div
          className={css`
            padding: 20px 30px;
          `}
        >
          <VideoPlayer stream={user} />
        </div>
      </div>
      <Chat stream={user}/>
    </div>
  );
}
