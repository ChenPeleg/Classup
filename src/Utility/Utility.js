const util = {
  updateSummaryArray: (sumArray = [], qNumber, result = "RIGHT") => {

    let array = [...sumArray];
    array[qNumber].push(result);
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
      const min = Math.min(...values.filter((el) => el > 0));
      for (const k of Object.keys(mObj)) {
        if (mObj[k] === min) {
          mObj[k] = mObj[k] + 1;
          return util.roundTo100(mObj);
        }
      }
    }
  },
  createAnswerObject: (answers) => {
    return answers.map((a) => {
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
      : util.reorderAnswers(answers);
  },
  createSummaryObject: (allQuestions) => {
    let numOfquestions = 0;
    let mistakesObject = { q0: 0, q1: 0, q23: 0 };
    const sumArray = allQuestions.filter((el) => el.includes("RIGHT"));
    for (let i = 0; i < sumArray.length; i++) {
      const wrongs = sumArray[i].filter((el) => el === "WRONG").length;
      const rights = sumArray[i].filter((el) => el === "RIGHT").length;
      let mistakeCound = wrongs < 2 ? "q" + wrongs : "q23";
      mistakesObject[mistakeCound] += 1;
      numOfquestions += rights;
    }

    return { mistakesObject, numOfquestions };
  }
};

// if (typeof require !== "undefined" && require.main === module) {
//   console.clear();
//   const o1 = { q0: 87, q1: 1, q23: 7 };

// }
export default util;
