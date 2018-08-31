import React from "react";
import { Link } from "@curi/react-dom";
import { css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faVolumeUp,
  faExpand,
  faCog
} from '@fortawesome/free-solid-svg-icons';

import Thumbnail from './Thumbnail';
import Watching from './Watching';

export default class VideoPlayer extends React.Component {
  render() {
    const { stream } = this.props;
    const game = stream.playing;
    return (
      <div
        className={css`
          width: 100%;
        `}
      >
        <div
          className={css`
            width: 100%;
            padding-top: 50%;
            background: #222233;
            position: relative;
          `}
        >
          <div
            className={css`
              position: absolute;
              bottom: 15px;
              width: 100%;
              padding: 0 5px;
              color: #fff;

              svg {
                margin: 0 5px;
              }
            `}
          >
            <div
              className={css`
                float: left;
              `}
            >
              <FontAwesomeIcon icon={faPlay} />
              <FontAwesomeIcon icon={faVolumeUp} />
            </div>
            <div
              className={css`
                float: right;
              `}
            >
              <FontAwesomeIcon icon={faCog} />
              <FontAwesomeIcon icon={faExpand} />
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin-top: 5px;      
          `}
        >
          <div
            className={css`
              display: flex;
            `}
          >
            <Thumbnail
              width='30'
              height='50'
              colors={game.colors}
            />
            <div>
              <div
                className={css`
                  font-size: 1.5em;
                `}
              >
                {stream.title}
              </div>
              <div>
                <Link
                  to='Game'
                  params={{ game: game.name }}
                  className={css`
                    color: #2c3e50;
                    text-decoration: none;
                  `}
                >
                  {game.name}
                </Link>
              </div>
            </div>
          </div>
          <div className='viewer-info'>
            <Watching count={stream.watching} />
          </div>
        </div>
      </div>
    );
  }
}
