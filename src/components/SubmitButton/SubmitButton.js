import React from "react";
import styles from "./SubmitButton.module.scss";
const SubmitButton = (props) => {
  return (
    <button
      className={[
        styles.submitButton,
        props.disableButton ? styles.submitDisabled : "",
      ].join(" ")}
      onClick={props.submitHandler}
      disabled={props.disableButton}
    >
      {props.children}
    </button>
  );
};
export default SubmitButton;
