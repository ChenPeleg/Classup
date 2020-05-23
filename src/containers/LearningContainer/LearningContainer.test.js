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
      const totalQ = Object.keys(mockedQuestionObject.questions).length;
      const num = 1
      wrap.setState({
        question_number: num,
        question_Object: mockedQuestionObject.questions[1],
        nextUnansweredQ: num,
        summaryArray: [...Array(totalQ + 1)].map((e) => []),
        gameHistory: [],
      });
    })
    const oldstate = wrap.state()
    wrap.setState({ ...oldstate, question_number: 8 })
    it("initialises sate correctly", () => {
      wrap.instance().initState()
      expect(wrap.state()).toMatchObject({ question_number: 1 })
    });
    it("doesn't progress to next Question when wrong", () => {
      wrap.instance().answeringHandler("WRONG")
      expect(wrap.state()).toMatchObject({ question_number: 1 })
    })
    it("progresses to next Question when right", () => {
      wrap.instance().answeringHandler("RIGHT")
      expect(wrap.state()).toMatchObject({ question_number: 2 })
    })
    it("views another question if already answered it", () => {
      wrap.setState({
        ...wrap.state(),
        question_number: 1,
        nextUnansweredQ: 4,
      });
      wrap.instance().viewAnotherQuestionHandler(3);
      expect(wrap.state()).toMatchObject({ question_number: 3 + 1 })
    })
    it("doesn't view another question if player didn't answer  it", () => {
      wrap.setState({
        ...wrap.state(),
        question_number: 1,
        nextUnansweredQ: 2,
      });
      wrap.instance().viewAnotherQuestionHandler(3);
      expect(wrap.state()).toMatchObject({ question_number: 1 })
    })
    it("resets the game and saves results in history object", () => {
      jest.useFakeTimers();
      const mockSummary = [["RIGHT"], ["RIGHT"], ["WRONG"]]
      wrap.setState({
        ...wrap.state(),
        summaryArray: mockSummary,
        question_number: 1,
        nextUnansweredQ: 2,
      });
      wrap.instance().resetGameHandler();
      jest.runAllTimers();
      expect(wrap.state()).toMatchObject({ question_number: 1 })
      expect(wrap.state()).toEqual(
        expect.objectContaining({
          gameHistory: expect.arrayContaining([expect.objectContaining({ summary: mockSummary })])
        }))

    })


  })

});
