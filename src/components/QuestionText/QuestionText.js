import React from "react";

const QuestionText = (props) => {
  return (
    <>
      <br></br>
      <div style={{ margin: "10px" }}>
        {props.q_num}. {props.q_text}
      </div>
      <br></br>
    </>
  );
};
export default QuestionText;
