import React, { Component } from "react";
import "./ProgressBar.scss";
import AdvanceContext from "../../context/advance-context";
import ProgressStick from "./ProgressStick/ProgressStick";
class ProgressBar extends Component {
  state: {
    q_number: 2,
  };

  render() {
    return (
      <AdvanceContext.Consumer>
        {(context) => <ProgressStick text={context.q_number} />}
      </AdvanceContext.Consumer>
    );
  }
}

export default ProgressBar;
