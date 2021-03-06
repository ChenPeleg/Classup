import React from "react";
import { shallow } from "enzyme";
import QuestionContainer from "./QuestionContainer";
import Answer from "../../components/Answer/Answer"


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
const mockHandler = jest.fn()
const mockProps = {
    QuestionObject: mockedQuestionObject.questions["1"],
    qNumber: 1,
    answeringHandler: mockHandler,
    nextUnansweredQ: 1
};

const wrap = shallow(<QuestionContainer {...mockProps} />)
describe("<QuestionContainer>", () => {
    it("renders correctly", () => { expect(wrap).toMatchSnapshot() })


})