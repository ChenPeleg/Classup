import React, { Component } from "react";
import "./ProgressNumber.scss";

class ProgressNumber extends Component {
  constructor(props) {
    super(props);
    this.currentNumberRef = React.createRef();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.curren_qNumber === this.props.curren_qNumber
      ? false
      : true;
  }

  updateLineLength(prevProps, prevState) {
    if (
      +this.props.number + 1 === +this.props.nextUnansweredQ &&
      this.currentNumberRef.current
    ) {
      this.props.lineWidthHandler(
        this.currentNumberRef.current.getBoundingClientRect().left
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    return this.updateLineLength(prevProps, prevState);
  }
  componentDidMount(prevProps, prevState) {
    return this.updateLineLength(prevProps, prevState);
  }

  render() {
    return (
      <div
        ref={this.currentNumberRef}
        className={this.props.className}
        onClick={(event) =>
          this.props.viewAnotherQuestionHandler(this.props.number)
        }
      >
        {this.props.text}
      </div>
    );
  }
}

export default ProgressNumber;
