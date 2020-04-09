import React, { Component } from "react";
import "./ProgressBar.scss";
import AdvanceContext from "../../context/advance-context";
import ProgressStick from "./ProgressStick/ProgressStick";
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q_number: "2",
      widthOfLine: "0px",
    };
    this.progBarRef = React.createRef();
    this.lineWidthHandler = this.lineWidthHandler.bind(this);
  }
  lineWidthHandler(length_) {
    const startPosition = this.progBarRef.current.getBoundingClientRect().left;
    const lineLength = length_ - startPosition;
    this.setState({ ...this.state, widthOfLine: lineLength + "px" });
    console.log(
      length_,
      this.state.widthOfLine,
      "progBar"

      // these are relative to the viewport, i.e. the window
      // var top = viewportOffset.top;
      // var left = viewportOffset;
    );
  }

  render() {
    return (
      <div className="progbar" ref={this.progBarRef}>
        <div
          className="prog-line"
          style={{ width: this.state.widthOfLine }}
        ></div>
        <AdvanceContext.Consumer>
          {(context) => (
            <ProgressStick
              q_counter={{
                q_current: +context.q_number,
                q_total: +context.total_q,
              }}
              lineWidthHandler={this.lineWidthHandler}
            />
          )}
        </AdvanceContext.Consumer>
      </div>
    );
  }
}

export default ProgressBar;
