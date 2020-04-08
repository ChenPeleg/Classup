import React, { Component } from "react";
import "./ProgressBar.scss";
import AdvanceContext from "../../context/advance-context";
import ProgressStick from "./ProgressStick/ProgressStick";
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q_number: "2",
      widthOfLine: "600px",
    };
    this.progBarRef = React.createRef();
    this.lineWidthHandler = this.lineWidthHandler.bind(this);
  }
  lineWidthHandler(length_) {
    this.setState({ ...this.state, widthOfLine: length_ + "px" });
    console.log(length_, this.state.widthOfLine);
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
