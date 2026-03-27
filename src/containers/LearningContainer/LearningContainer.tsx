import { Component } from 'react';
import QuestionContainer from '../QuestionContainer/QuestionContainer';
import AdvanceContext from '../../context/advance-context';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import SummaryContainer from '../SummaryContainer/SummaryContainer';
import Util from '../../Utility/Utility';
import { QuestionsCollection, QuestionData, ResultType } from '../../types/questions';

interface LearningContainerProps {
  AllQuestions: QuestionsCollection;
  soundOn: boolean;
}

interface GameHistory {
  summary: ResultType[][];
  time: number;
}

interface LearningContainerState {
  questionNumber: number;
  QuestionObject: QuestionData;
  nextUnansweredQ: number;
  summaryArray: ResultType[][];
  gameHistory: GameHistory[];
}

class LearningContainer extends Component<LearningContainerProps, LearningContainerState> {
  timeAfterAnswer = 1500;
  totalQ = Object.keys(this.props.AllQuestions.questions).length;

  state: LearningContainerState = {
    questionNumber: 1,
    QuestionObject: this.props.AllQuestions.questions[1],
    nextUnansweredQ: 1,
    summaryArray: [...Array(this.totalQ + 1)].map(() => []),
    gameHistory: [],
  };

  infoArray = Object.keys(this.props.AllQuestions.questions)
    .filter((num) => (this.props.AllQuestions.questions[num].type === 'info' ? Number(+num) : null))
    .map((el) => +el);

  answeringHandler = (action: ResultType | 'INFO') => {
    const newSummaryArray = Util.updateSummaryArray(
      [...this.state.summaryArray],
      this.state.questionNumber,
      action === 'INFO' ? 'RIGHT' : action
    );
    const newQusetionNumber = this.state.questionNumber + (action === 'WRONG' ? 0 : 1);
    this.setState({
      ...this.state,
      questionNumber: newQusetionNumber,
      QuestionObject: this.props.AllQuestions.questions[newQusetionNumber],
      nextUnansweredQ:
        newQusetionNumber > this.state.nextUnansweredQ
          ? newQusetionNumber
          : this.state.nextUnansweredQ,
      summaryArray: newSummaryArray,
    });
  };

  viewAnotherQuestionHandler = (number: number) => {
    const questionWasntReached = this.state.nextUnansweredQ < +number + 1;
    const isItSummary = this.totalQ <= this.state.questionNumber;
    if (questionWasntReached || isItSummary) {
      return;
    }
    this.setState({
      ...this.state,
      questionNumber: number + 1,
      QuestionObject: this.props.AllQuestions.questions[number + 1],
    });
  };

  resetGameHandler = () => {
    const newGameHistory = [...this.state.gameHistory];
    newGameHistory.push({ summary: this.state.summaryArray, time: Date.now() });
    this.initState();
    setTimeout(() => {
      this.setState({ ...this.state, gameHistory: newGameHistory });
    }, 10);
  };

  initState = () => {
    const num = 1;
    this.setState({
      questionNumber: num,
      QuestionObject: this.props.AllQuestions.questions[1],
      nextUnansweredQ: num,
      summaryArray: [...Array(this.totalQ + 1)].map(() => []),
    });
  };

  onKeyPressedFake() {
    // for Testing purposes
  }

  componentDidMount() {
    document.addEventListener('keydown', (event) => {
      if (this.state.nextUnansweredQ > this.state.questionNumber) return;
      if (event.keyCode === 32) {
        this.totalQ >= this.state.questionNumber
          ? this.answeringHandler('RIGHT')
          : this.resetGameHandler();
      }
    });
  }

  render() {
    return (
      <div tabIndex={0} onKeyDown={() => this.onKeyPressedFake()}>
        <AdvanceContext.Provider
          value={{
            qNumber: this.state.questionNumber,
            totalQ: this.totalQ,
            qNext: this.state.nextUnansweredQ,
            infoQuestions: this.infoArray,
          }}
        >
          <ProgressBar viewAnotherQuestionHandler={this.viewAnotherQuestionHandler} />
          {this.totalQ >= this.state.questionNumber ? (
            <QuestionContainer
              QuestionObject={this.state.QuestionObject}
              qNumber={this.state.questionNumber}
              answeringHandler={this.answeringHandler}
              nextUnansweredQ={this.state.nextUnansweredQ}
              soundOn={this.props.soundOn}
            />
          ) : (
            <SummaryContainer sumData={this.state.summaryArray} resetHandler={this.resetGameHandler} />
          )}
        </AdvanceContext.Provider>
      </div>
    );
  }
}
export default LearningContainer;
