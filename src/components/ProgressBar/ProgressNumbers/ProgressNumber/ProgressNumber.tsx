import React, { Component } from 'react';
import './ProgressNumber.scss';

interface ProgressNumberProps {
  className: string;
  text: number;
  currentQusetNumber: number;
  number: number;
  lineWidthHandler: (left: number) => void;
  viewAnotherQuestionHandler: (number: number) => void;
  nextUnansweredQ: number;
}

class ProgressNumber extends Component<ProgressNumberProps> {
  currentNumberRef: React.RefObject<HTMLDivElement | null>;

  constructor(props: ProgressNumberProps) {
    super(props);
    this.currentNumberRef = React.createRef();
  }

  shouldComponentUpdate(nextProps: ProgressNumberProps): boolean {
    return nextProps.currentQusetNumber === this.props.currentQusetNumber ? false : true;
  }

  updateLineLength(): void {
    if (+this.props.number + 1 === +this.props.nextUnansweredQ && this.currentNumberRef.current) {
      this.props.lineWidthHandler(this.currentNumberRef.current.getBoundingClientRect().left);
    }
  }

  componentDidUpdate(): void {
    return this.updateLineLength();
  }

  componentDidMount(): void {
    return this.updateLineLength();
  }

  render() {
    return (
      <div
        ref={this.currentNumberRef}
        className={this.props.className}
        onClick={() => this.props.viewAnotherQuestionHandler(this.props.number)}
      >
        {this.props.text}
      </div>
    );
  }
}

export default ProgressNumber;
