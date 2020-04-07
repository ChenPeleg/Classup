import React, { Component } from "react";
import "./ProgressNumber.scss";

class ProgressNumber extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.number === this.props.current) {
      console.log(this.myRef.current.offsetLeft);
    }
  }

  render() {
    if (this.props.number === this.props.current && this.myRef.current) {
      console.log(this.myRef.current.offsetLeft);
      this.props.lineWidthHandler(this.myRef.current.offsetLeft);
    }
    return (
      <div ref={this.myRef} className={this.props.className}>
        {this.props.text}
      </div>
    );
  }
}

export default ProgressNumber;
