import React from "react";
import { css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import API from '../../generators/streamState';
import StreamBadge from './StreamBadge';

export default class LeftSideBar extends React.Component {
  state = {
    featured: API.featuredStreams(5),
    hidden: false
  };

  toggleHidden = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    const { featured, hidden } = this.state;
    return (
      <div
        className={css`
          background: #222233;
          width: 225px;
          flex-shrink: 0;
          height: calc(100vh - 50px);
          position: relative;
          margin-right: 25px;
          color: #ff6868;
          width: ${hidden ? '45px': 'inherit'}
        `}
      >
        <div
          className={css`
            position: absolute;
            right: -25px;
            width: 25px;
            height: 35px;
            background: #efefef;
            color: #e13333;
            font-size: 20px;
            line-height: 1.5em;
            cursor: pointer;
            padding: 5px;
          `}
          onClick={this.toggleHidden}>
          {hidden
            ? <FontAwesomeIcon icon={faChevronRight} />
            : <FontAwesomeIcon icon={faChevronLeft} />
          }
        </div>
        <div
          className={css`
            padding: ${hidden ? "5px 5px 0" : "15px 15px 0"};
          `}
        >
          <div className='featured'>
            <h3
              className={css`
                text-align: center;
              `}
            >
              {this.state.hidden ? <FontAwesomeIcon icon={faCamera} /> : "Featured Streamer"}
            </h3>
            {featured.map(stream => (
              <StreamBadge
                key={stream.id}
                stream={stream}
                hidden={hidden}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
