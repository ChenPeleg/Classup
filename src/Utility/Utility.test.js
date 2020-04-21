import React from "react";
import { shallow } from "enzyme";
import util from "./Utility";


describe("<Utility>", () => {

  describe("helper functions - createAnswerObject", () => {
    it("creates an  answer object", () => {
      const answers = ["blue", "black", "green", "yellow"];
      const res = util.createAnswerObject(answers)
      expect(res).toMatchObject([
        {
          "content": "blue",
          "number": 1,
        },
        {
          "content": "black",
          "number": 2,
        },
        {
          "content": "green",
          "number": 3,
        },
        {
          "content": "yellow",
          "number": 4,
        },

      ])
    })
  })
})
