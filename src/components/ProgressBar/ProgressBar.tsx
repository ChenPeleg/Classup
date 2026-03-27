import React, { Component } from 'react';
import './ProgressBar.scss';
import AdvanceContext, { AdvanceContextType } from '../../context/advance-context';
import ProgressNumbers from './ProgressNumbers/ProgressNumbers';

interface ProgressBarProps {
  viewAnotherQuestionHandler: (number: number) => void;
}

interface ProgressBarState {
  qNumber: string;
  widthOfLine: string;
}

class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
  progBarRef: React.RefObject<HTMLDivElement | null>;

  constructor(props: ProgressBarProps) {
    super(props);
    this.state = {
      qNumber: '2',
      widthOfLine: '0px',
    };
    this.progBarRef = React.createRef();
    this.lineWidthHandler = this.lineWidthHandler.bind(this);
  }

  lineWidthHandler(lengthFromBar: number): void {
    if (!this.progBarRef.current) {
      setTimeout(() => {
        this.lineWidthHandler(lengthFromBar);
      }, 500);
      return;
    }
    const startPosition = this.progBarRef.current.getBoundingClientRect().left;
    const lineLength = lengthFromBar - startPosition + 20;
    setTimeout(() => {
      this.setState({ ...this.state, widthOfLine: lineLength + 'px' });
    }, 500);
  }

  render() {
    return (
      <div className="progbar" ref={this.progBarRef}>
        <div className="prog-line" style={{ width: this.state.widthOfLine }}></div>
        <AdvanceContext.Consumer>
          {(context: AdvanceContextType) => (
            <ProgressNumbers
              qusetionCounter={{
                qNumber: +context.qNumber,
                qTotal: +(context.totalQ || 0),
                qNext: +(context.qNext || 0),
                infoQuestions: context.infoQuestions || [],
              }}
              lineWidthHandler={this.lineWidthHandler}
              viewAnotherQuestionHandler={this.props.viewAnotherQuestionHandler}
              nextUnansweredQ={+(context.qNext || 0)}
            />
          )}
        </AdvanceContext.Consumer>
      </div>
    );
  }
}

export default ProgressBar;
