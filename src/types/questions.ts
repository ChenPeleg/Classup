export interface QuestionMeta {
  name: string;
  id: string;
}

export interface QuestionData {
  type?: string;
  text: string;
  answers: string[];
  solution: string;
}

export interface QuestionsCollection {
  meta: QuestionMeta;
  questions: {
    [key: string]: QuestionData;
  };
}

export interface AnswerObject {
  content: string;
  number: number;
}

export interface MistakesObject {
  q0: number;
  q1: number;
  q23: number;
}

export interface SummaryData {
  mistakesObject: MistakesObject;
  numOfquestions: number;
}

export type ResultType = 'RIGHT' | 'WRONG';
