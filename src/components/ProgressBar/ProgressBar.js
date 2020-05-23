import React, { Component } from "react";
import "./ProgressBar.scss";
import AdvanceContext from "../../context/advance-context";
import ProgressNumbers from "./ProgressNumbers/ProgressNumbers";
class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qNumber: "2",
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
    setTimeout(() => {
      this.setState({ ...this.state, widthOfLine: lineLength + "px" });
    }, 500);
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
                qNumber: +context.qNumber,
                q_total: +context.totalQ,
                qNext: +context.qNext,
                info_questions: context.info_questions,
              }}
              lineWidthHandler={this.lineWidthHandler}
              viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
              nextUnansweredQ={+context.qNext}
            />
          )}
        </AdvanceContext.Consumer>
      </div>
    );
  }
}

export default ProgressBar;
