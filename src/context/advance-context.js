import React from "react";

const AdvanceContext = React.createContext({
  q_number: 2,
  nextQuestion: q_number => q_number++
});
export default AdvanceContext;
