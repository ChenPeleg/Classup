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

  updateLineLength(prevProps, prevState) {
    if (
      this.props.number === this.props.current &&
      this.currentNumberRef.current
    ) {
      this.props.lineWidthHandler(this.currentNumberRef.current.offsetLeft);
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
      <div ref={this.currentNumberRef} className={this.props.className}>
        {this.props.text}
      </div>
    );
  }
}

export default ProgressNumber;
