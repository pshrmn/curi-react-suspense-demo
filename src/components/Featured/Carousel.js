import React from "react";
import { css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BUTTON = css`
  height: 100%;
  display: block;
  margin: 0 3px;
  color: #efefef;
  background: #8a2b33;
  border: 1px solid rgba(255,255,255,0.5);
`;

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: 0 };
    this.itemsRef = React.createRef();
  }

  scrollLeft = () => {
    const parentWidth = this.itemsRef.current.offsetWidth;
    const offset = parentWidth >= 250 ? 250 : 125;
    this.itemsRef.current.scrollLeft -= offset;
  }

  scrollRight = () => {
    const parentWidth = this.itemsRef.current.offsetWidth;
    const offset = parentWidth >= 250 ? 250 : 125;
    this.itemsRef.current.scrollLeft += offset;
  }

  render() {
    return (
      <div
        className={css`
          display: flex;
          flex-flow: row nowrap;
          position: relative;
          width: 100%;
          height: 80px;
        `}
      >
        <button className={BUTTON} onClick={this.scrollLeft}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          ref={this.itemsRef}
          className={css`
            display: flex;
            flex-flow: row nowrap;
            flex: 2 0;
            overflow-x: hidden;
          `}
        >
          {this.props.children}
        </div>
        <button className={BUTTON} onClick={this.scrollRight}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
}
