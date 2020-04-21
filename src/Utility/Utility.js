const util = {
  updateSummaryArray: (sumArray = [], q_number, result = "RIGHT") => {
    let array = [...sumArray];
    array[q_number].push(result);
    return array;
  },
  roundTo100: (mObj) => {
    const values = Object.values(mObj);
    if (
      values.reduce((a, b) => {
        return a + b;
      }, 0) === 100
    ) {
      return mObj;
    } else {
      const min = Math.min(...values.filter((e) => e > 0));
      for (const k of Object.keys(mObj)) {
        if (mObj[k] === min) {
          mObj[k] = mObj[k] + 1;
          return util.roundTo100(mObj);
        }
      }
    }
  },
  createAnswerObject: (answers) => {
    answers.map((a) => {
      return { content: a, number: 1 + answers.indexOf(a) };
    });
  },
  reorderAnswers: (answers) => {
    const wasReorderCompletely = (arr1, arr2) => {
      for (let i = 1; i < arr1.length; i++) {
        if (arr1[i].number === arr2[i].number) {
          return false;
        }
        return true;
      }
    };
    let newAnswersObject = [...answers];
    newAnswersObject.sort(() => Math.random() - 0.5);
    return wasReorderCompletely(newAnswersObject, answers)
      ? newAnswersObject
      : this.reorderAnswers(answers);
  },
};

// if (typeof require !== "undefined" && require.main === module) {
//   console.clear();
//   const o1 = { q0: 87, q1: 1, q23: 7 };
//
// }
export default util;
