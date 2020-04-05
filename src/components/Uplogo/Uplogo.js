import React from "react";
import "./uplogo.scss";

const uplogo = (props) => {
  return <div className={" logo " + (props.className || " ")}>Class-Up!</div>;
};
export default uplogo;
