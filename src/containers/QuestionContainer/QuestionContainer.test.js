import React from "react";
import { shallow } from "enzyme";
import QuestionContainer from "./QuestionContainer";
import createAnswerObject from "./QuestionContainer";
import reorderAnswers from "./QuestionContainer";

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
    Question_Object: mockedQuestionObject.questions["1"],
    q_num: 2,
    answeringHandler: mockHandler,
    next_unanswered_q: 3
};

const wrap = shallow(<QuestionContainer {...mockProps} />)
describe("<QuestionContainer>", () => {
    it("renders correctly", () => { expect(wrap).toMatchSnapshot() })
    describe("helper functions - createAnswerObject", () => {
        it("creates an  answer object", () => {
            const answers = ["blue", "black", "green", "yellow"];
            const res = createAnswerObject(answers)
            
            expect(answers).toMatchObject(answers)
        })
    })
})