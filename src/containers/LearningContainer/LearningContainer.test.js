import React from "react";
import { shallow } from "enzyme";
import LearningContainer from "./LearningContainer";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import QuestionContainer from "../../containers/QuestionContainer/QuestionContainer";

const mockedQuestionObject = {
  meta: {
    name: "English Colors",
  },
  questions: {
    "1": {
      text: "What is the color of the sand?",
      answers: ["blue", "black", "green", "yellow"],
      solution: "4",
    },
    "2": {
      text: "What is the color of the sand?",
      answers: ["blue", "black", "green", "yellow"],
      solution: "4",
    },
  },
};
const wrap = shallow(<LearningContainer AllQuestions={mockedQuestionObject} />);

describe("<LearningContainer>", () => {
  describe("general rendering", () => {
    it("renders correctly", () => {
      expect(wrap).toMatchSnapshot()
    });
    it("renders progress bar", () => {
      expect(wrap.find(ProgressBar));
    });
    it("renders a question", () => {
      expect(wrap.find(QuestionContainer));
    });
  })
  describe("state managment", () => {
    beforeEach(() => {
      const total_q = Object.keys(mockedQuestionObject.questions).length;
      const num = 1
      wrap.setState({
        question_number: num,
        question_Object: mockedQuestionObject.questions[1],
        next_unanswered_q: num,
        summaryArray: [...Array(total_q + 1)].map((e) => []),
      });
    })
    const oldstate = wrap.state()
    wrap.setState({ ...oldstate, question_number: 8 })
    it("initialises sate correctly", () => {
      wrap.instance().initState()
      expect(wrap.state()).toMatchObject({ question_number: 1 })

    })

  })

});
