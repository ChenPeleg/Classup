import { Component } from 'react';
import './ProgressNumbers.scss';
import ProgressNumber from './ProgressNumber/ProgressNumber';

interface QuestionCounter {
  qNumber: number;
  qTotal: number;
  qNext: number;
  infoQuestions: number[];
}

interface ProgressNumbersProps {
  qusetionCounter: QuestionCounter;
  lineWidthHandler: (left: number) => void;
  viewAnotherQuestionHandler: (number: number) => void;
  nextUnansweredQ: number;
}

interface QuestionProgress {
  txt: number;
  wasAnswered: boolean;
  isCurrent: boolean;
  isNext: boolean;
  isInfo: boolean;
}

class progressNumbers extends Component<ProgressNumbersProps> {
  render() {
    const { qNumber, qTotal, qNext, infoQuestions } = this.props.qusetionCounter;

    const qProgArray: QuestionProgress[] = [];

    for (let i = 1; i <= qTotal; i++) {
      const txt = i;
      const wasAnswered = qNext > i ? true : false;
      const isCurrent = i === qNumber ? true : false;
      const isNext = i === qNext ? true : false;
      const isInfo = infoQuestions.includes(i);
      qProgArray.push({
        txt: txt,
        wasAnswered: wasAnswered,
        isCurrent: isCurrent,
        isNext: isNext,
        isInfo: isInfo,
      });
    }

    return qProgArray.map((q) => (
      <ProgressNumber
        key={q.txt + 'progKey'}
        className={`prog_q_icon ${q.wasAnswered ? 'answered' : 'unanswered'} ${
          q.isCurrent ? 'current_Q_num' : ''
        } ${q.isNext ? 'next_q_num' : ''} ${q.isInfo ? ' infoNumber' : ''}`}
        text={q.txt}
        currentQusetNumber={qNumber}
        number={qProgArray.indexOf(q)}
        lineWidthHandler={this.props.lineWidthHandler}
        viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
        nextUnansweredQ={this.props.nextUnansweredQ}
      />
    ));
  }
}

export default progressNumbers;
