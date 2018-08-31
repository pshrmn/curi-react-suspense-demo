import React from "react";
import { css } from "emotion";

import UserTopBar from '../components/UserTopBar';
import VideoPlayer from '../components/VideoPlayer';
import Chat from '../components/Chat';

export default ({ response }) => (
  response.data.error
    ? <div>
        {response.data.error}
      </div>
    : <div
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
          <UserTopBar user={response.data.user} />
          <div
            className={css`
              padding: 20px 30px;
            `}
          >
            <VideoPlayer stream={response.data.user} />
          </div>
        </div>
        <Chat stream={response.data.user}/>
      </div>
);
