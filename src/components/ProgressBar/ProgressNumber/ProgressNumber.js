import React, { Component } from "react";
import "./ProgressNumber.scss";

class ProgressNumber extends Component {
  constructor(props) {
    super(props);
    this.currentNumberRef = React.createRef();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.current === this.props.current ? false : true;
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.number + 1 === this.props.current &&
      this.currentNumberRef.current
    ) {
      this.props.lineWidthHandler(this.currentNumberRef.current.offsetLeft);
    }
  }
  render() {
    return (
      <div ref={this.currentNumberRef} className={this.props.className}>
        {this.props.text}
      </div>
    );
  }
}

export default ProgressNumber;
