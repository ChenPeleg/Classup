import styles from "./Mark.module.scss";
import React from "react";
import Vmark from "../../../assets/images/check-mark.svg";
import Xmark from "../../../assets/images/x-mark.svg";

const mark = (props) => {
  return (
    <div className={styles.checkMarkWrapper}>
      <img
        src={props.marked_Answer === "RIGHT" ? Vmark : Xmark}
        className={styles.checkMark}
        alt="MyBurger"
      />
    </div>
  );
};
export default mark;
