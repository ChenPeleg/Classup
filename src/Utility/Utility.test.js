import util from "./Utility";

const answerArray = [
  { content: "blue", number: 1 },
  { content: "black", number: 2 },
  { content: "green", number: 3 },
  { content: "yellow", number: 4 },
];
const sumData = [
  [],
  ["INFO"],
  ["WRONG", "RIGHT"],
  ["RIGHT"],
  ["WRONG", "WRONG", "WRONG", "RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["WRONG", "WRONG", "RIGHT"],
  ["WRONG", "RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["RIGHT"],
  ["WRONG", "RIGHT"],
];

describe("<Utility>", () => {
  describe("update SummaryArray", () => {
    it("adds wrong answer to array", () => {
      expect(util.updateSummaryArray([[], [], [], [], ["RIGHT"], []], 3, "WRONG")).toMatchObject(
        [[], [], [], ["WRONG"], ["RIGHT"], []]
      );
    });
  });
  describe("roundTo100", () => {
    it("rounds to 100", () => {
      expect(util.roundTo100({ a: 80, b: 11, c: 3 })).toMatchObject({ a: 80, b: 11, c: 9 });
    });
  });
  describe("reorderAnswers", () => {
    it("reorders answers in different order", () => {
      expect(util.reorderAnswers(answerArray)).not.toBe(answerArray);
    });
  });
  describe("helper functions - createAnswerObject", () => {
    it("creates an answer object", () => {
      const answers = ["blue", "black", "green", "yellow"];
      const res = util.createAnswerObject(answers);
      expect(res).toMatchObject(answerArray);
    });
  });
  describe("createSummaryObject", () => {
    it("create summary object from sumData", () => {
      expect(util.createSummaryObject(sumData)).toMatchObject({
        mistakesObject: { q0: 6, q1: 3, q23: 2 },
      });
    });
  });
});
