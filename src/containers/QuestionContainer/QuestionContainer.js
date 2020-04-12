import React, { useState } from "react";
import Answer from "../../components/Answer/Answer";

import QuestionText from "../../components/QuestionText/QuestionText";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import QuestionWrapper from "../../components/QuestionWrapper/QuestionWrapper";

const createAnswerObject = (answers) =>
  answers.map((a) => {
    return { content: a, number: 1 + answers.indexOf(a) };
  });
// const MysubmitHandler = (event, TEST_MODE = false) => {
// const num = this.state.chosenAnswer;
// const oldNumber = this.state.question_number;
// if (
//   this.state.next_unanswered_q > oldNumber &&
//   this.state.question_Object.type !== "info"
// ) {
//   return;
// }
// if (this.state.question_Object.type === "info") {
//   if (this.state.question_number !== this.state.next_unanswered_q) {
//     this.viewHandler(true, this.state.question_number);
//     return;
//   }
//   const new_q_number = this.state.question_number + 1;
//   this.setState({
//     ...this.state,
//     marked_Answer: false,
//     chosenAnswer: false,
//     question_number: new_q_number,
//     next_unanswered_q: new_q_number,
//     question_Object: allquestions.questions[new_q_number],
//     current_answer_obj: this.createAnswerObject(
//       allquestions.questions[new_q_number].answers
//     ),
//   });
// } else if (num === +allquestions.questions[oldNumber].solution || TEST_MODE) {
//   this.setState({ ...this.state, marked_Answer: "RIGHT" });
//   const new_q_number = this.state.question_number + 1;
//   setTimeout(
//     () => {
//       this.setState({
//         ...this.state,
//         marked_Answer: false,
//         chosenAnswer: false,
//         question_number: new_q_number,
//         next_unanswered_q: new_q_number,
//         question_Object: allquestions.questions[new_q_number],
//       });
//     },
//     TEST_MODE ? 2 : this.TIME_AFTER_ANSWER
//   );
// } else {
//   this.setState({ ...this.state, marked_Answer: "WRONG" });
//   setTimeout(() => {
//     const new_ans_array = [...this.state.current_answer_obj].sort(
//       () => Math.random() - 0.5
//     );
//     this.setState({
//       ...this.state,
//       marked_Answer: false,
//       current_answer_obj: new_ans_array,
//       chosenAnswer: false,
//     });
//   }, this.TIME_AFTER_ANSWER);
// }
// };
const Question = (props) => {
  const [isAnsChosen, setAnsChosen] = useState(false);
  const setAnswerToChoosen = (event, num) => {
    console.log("answer " + num + " was chosen");
    setAnsChosen(true);
  };
  return (
    <QuestionWrapper>
      <QuestionText q_num={props.q_num} q_text={props.q_ask} />
      {createAnswerObject(props.Question_Object.answers).map((a) => {
        const key = "Q" + props.q_num + a.number;
        return (
          <Answer
            content={a.content}
            key={key}
            num={a.number}
            answerHandler={props.answerHandler}
            isChosen={props.chosenAnswer === a.number ? true : false}
            isChoosenHook={isAnsChosen}
            chooseHandlerHook={setAnswerToChoosen}
            marked_Answer={props.marked_Answer}
            next_unanswered_q={props.next_unanswered_q}
          />
        );
      })}
      <SubmitButton
        disableButton={
          !(props.chosenAnswer || props.Question_Object.type === "info")
        }
        submitHandler={props.submitHandler}
      >
        {props.Question_Object.type === "info" ? "Continue" : "Submit"}
      </SubmitButton>
    </QuestionWrapper>
  );
};
export default Question;
