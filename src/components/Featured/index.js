import React from "react";
import { css } from "emotion";
import { createResource } from "react-cache";

import API from '../../generators/streamState';
import { cache } from "../../cache";

import Featuring from './Featuring';
import Carousel from './Carousel';
import Thumbnail from '../Thumbnail';

const streamsResource = createResource(() => {
  return Promise.resolve(API.featuredStreams(10));
});

export default class Featured extends React.Component {
  state = { active: 0 };

  setActive = active => {
    this.setState({ active });
  }

  render() {
    const streams = streamsResource.read(cache);
    const { active } = this.state;
    const activeFeatured = streams[active];

    return (
      <div
        className={css`
          background: #222233;
          padding: 10px;
        `}
      >
        <Featuring stream={activeFeatured} />
        <Carousel>
          {streams.map((stream, index) => (
            <div
              key={stream.id}
              className={css`
                width: 120px;
                height: 75px;
                flex-shrink: 0;
                background: transparent;
                margin: 0 5px 0 0;

                ${index === active
                  ? `
                      .thumb-holder{
                        border-color: #e13333;
                      }

                      .underbar {
                        background: #e13333;
                        width: 120px;
                        margin: 2px 0 0;
                      }
                    `
                : ''}
              `}
              onClick={() => {
                this.setActive(index);
              }}
            >
              <div
                className={css`
                  position: relative;
                  width: 120px;
                  height: 75px;
                  border: 1px solid transparent;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.25);
                  `}
                ></div>
                <Thumbnail width='118' height='73' colors={stream.colors} />
                <div
                  className={css`
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    padding: 3px 3px 0 0;
                    color: #fff;
                    font-size: 12px;

                    &::before {
                      content: '';
                      display: inline-block;
                      background: #e13333;
                      width: 10px;
                      height: 10px;
                      border-radius: 10px;
                      margin: 0 3px;
                    }
                  `}
                >
                  {stream.watching}
                </div>
              </div>
              <div
                className={css`
                  width: 118px;
                  margin: 2px 2px 0;
                  height: 2px;
                  background: #8a2b33;
                `}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
