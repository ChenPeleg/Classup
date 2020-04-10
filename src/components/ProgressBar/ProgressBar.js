import React, { Component } from "react";
import "./ProgressBar.scss";
import AdvanceContext from "../../context/advance-context";
import ProgressNumbers from "./ProgressNumbers/ProgressNumbers";
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
    if (!this.progBarRef.current) {
      setTimeout(() => {
        this.lineWidthHandler(length_);
      }, 500);
      return;
    }
    const startPosition = this.progBarRef.current.getBoundingClientRect().left;
    const lineLength = length_ - startPosition + 20;
    this.setState({ ...this.state, widthOfLine: lineLength + "px" });
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
            <ProgressNumbers
              q_counter={{
                q_current: +context.q_number,
                q_total: +context.total_q,
                q_next: +context.q_next,
              }}
              lineWidthHandler={this.lineWidthHandler}
              viewHandler={this.props.viewHandler}
              next_unanswered_q={+context.q_next}
            />
          )}
        </AdvanceContext.Consumer>
      </div>
    );
  }
}

export default ProgressBar;
