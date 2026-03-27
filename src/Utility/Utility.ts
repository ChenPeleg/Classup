import { AnswerObject, MistakesObject, ResultType, SummaryData } from '../types/questions';

const util = {
  updateSummaryArray: (
    sumArray: ResultType[][] = [],
    qNumber: number,
    result: ResultType = 'RIGHT'
  ): ResultType[][] => {
    const array = [...sumArray];
    array[qNumber].push(result);
    return array;
  },

  roundTo100: (mObj: MistakesObject): MistakesObject => {
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
        const key = k as keyof MistakesObject;
        if (mObj[key] === min) {
          mObj[key] = mObj[key] + 1;
          return util.roundTo100(mObj);
        }
      }
    }
    return mObj;
  },

  createAnswerObject: (answers: string[]): AnswerObject[] => {
    return answers.map((a) => {
      return { content: a, number: 1 + answers.indexOf(a) };
    });
  },

  reorderAnswers: (answers: AnswerObject[]): AnswerObject[] => {
    const wasReorderCompletely = (arr1: AnswerObject[], arr2: AnswerObject[]): boolean => {
      for (let i = 1; i < arr1.length; i++) {
        if (arr1[i].number === arr2[i].number) {
          return false;
        }
        return true;
      }
      return false;
    };
    const newAnswersObject = [...answers];
    newAnswersObject.sort(() => Math.random() - 0.5);
    return wasReorderCompletely(newAnswersObject, answers)
      ? newAnswersObject
      : util.reorderAnswers(answers);
  },

  createSummaryObject: (allQuestions: ResultType[][]): SummaryData => {
    let numOfquestions = 0;
    const mistakesObject: MistakesObject = { q0: 0, q1: 0, q23: 0 };
    const sumArray = allQuestions.filter((el) => el.includes('RIGHT'));
    for (let i = 0; i < sumArray.length; i++) {
      const wrongs = sumArray[i].filter((el) => el === 'WRONG').length;
      const rights = sumArray[i].filter((el) => el === 'RIGHT').length;
      const mistakeCount = wrongs < 2 ? ('q' + wrongs) as keyof MistakesObject : 'q23';
      mistakesObject[mistakeCount] += 1;
      numOfquestions += rights;
    }

    return { mistakesObject, numOfquestions };
  },
};

export default util;
