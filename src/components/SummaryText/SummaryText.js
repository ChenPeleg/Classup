import React from "react";

const SummaryText = (props) => {
  return (
    <>
      <div style={{ textAlign: "left" }}>
        <div
          style={{
            paddingBottom: "5px",
            fontWeight: "Bold",
            textAlign: "center",
          }}
        >
          {" "}
          Very Good!{" "}
        </div>
        You've completed this lesson. This is your lesson summary:
        <br></br>
        <br></br>
        {props.children}
        <br></br>
        You can practice this lesson again by pressing "Start Again".
      </div>
    </>
  );
};
export default SummaryText;
