import React from "react";

const SummaryText = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "Bold" }}> Very Good! </span>
        <br></br>
        <br></br> You've completed this lesson. This is your lesson summary by
        number of attempts to answer each question.
        {props.children}
        <br></br>
        You can practice this lesson again by Pressing "Strat Again". all Of
        your progress will be deleted.
      </div>
    </>
  );
};
export default SummaryText;
