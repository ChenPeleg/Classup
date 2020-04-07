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
      <div className="progbar">
        <div className="prog-line"></div>
        <AdvanceContext.Consumer>
          {(context) => (
            <ProgressStick
              q_counter={{
                q_current: +context.q_number,
                q_total: +context.total_q,
              }}
            />
          )}
        </AdvanceContext.Consumer>
      </div>
    );
  }
}

export default ProgressBar;
