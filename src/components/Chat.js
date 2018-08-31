import React from "react";
import { css } from "emotion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hidden: false,
      chatLines: []
    };
    this.linesRef = React.createRef();
  }

  toggleHidden = () => {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    const { hidden } = this.state
    const { stream } = this.props;
    return (
      <div
        className={css`
          height: calc(100vh - 50px);
          margin-left: 25px;
          position: relative;
          width: ${hidden ? "0px" : "inherit"}
        `}
      >
        <div
          className={css`
            position: absolute;
            left: -25px;
            width: 25px;
            height: 35px;
            background: #efefef;
            color: #e13333;
            font-size: 20px;
            line-height: 1.5em;
            cursor: pointer;
          `}
          onClick={this.toggleHidden}
        >
          {hidden
            ? <FontAwesomeIcon icon={faChevronLeft} />
            : <FontAwesomeIcon icon={faChevronRight} />
          }
        </div>
        <div
          className={css`
            width: 300px;
            border-left: 1px solid #222233;
            height: 100%;
            padding: 5px;
            overflow-y: scroll;
            display: ${hidden ? 'none': 'inherit'}
          `}
          ref={this.linesRef}
        >
          {this.state.chatLines.map(line => (
            <div
              key={line.key}
              className={css`
                margin-bottom: 5px;
              `}
            >
              <span
                className={css`
                  font-weight: bold;
                `}
              >
                {line.username}:
              </span> {line.text}
            </div>
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.stream.chat.start(lines => {
      this.setState({
        chatLines: lines
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stream !== this.props.stream) {
      prevProps.stream.chat.stop();
      this.props.stream.start();
      this.setState({ hidden: false });  
    } else {
      const lines = this.linesRef.current;
      const height = lines.scrollTop + lines.clientHeight;
      const bottom = lines.scrollHeight;
      // This threshold might need to be tweaked. The first
      // message that extends beyond the natural height, if
      // significantly long, will break this. Another check
      // here may be useful to prevent this, but I'm not
      // bothering with it for the time being.
      if (height/bottom > 0.9) {
        lines.scrollTop = lines.scrollHeight;
      }
    }
  }

  componentWillUnmount() {
    this.props.stream.chat.stop();
  }
}
