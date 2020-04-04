import "./Mark.css";
import React from "react";
import Vmark from "../../../assets/images/check-mark.svg";
import Xmark from "../../../assets/images/x-mark.svg";

const mark = props => {
  return (
    <div className="check-mark-wrapper">
      <img
        src={props.marked_Answer === "RIGHT" ? Vmark : Xmark}
        className="check-mark"
        alt="MyBurger"
      />
    </div>
  );
};
export default mark;
