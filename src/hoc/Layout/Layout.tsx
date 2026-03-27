import React, { Component } from 'react';
import axios from 'axios';
import LearningContainer from '../../containers/LearningContainer/LearningContainer';
import Navigation from '../../components/Navigation/Navigation';
import allquestions from './allquestions.json';
import './Layout.scss';
import LoaderAnimation from '../../components/UI/LoaderAnimation/LoaderAnimation';
import { QuestionsCollection } from '../../types/questions';

interface LayoutProps {
  questionsUrl: string;
}

interface LayoutState {
  AllQuestions: QuestionsCollection | false;
  soundOn: boolean;
}

class Layout extends Component<LayoutProps, LayoutState> {
  state: LayoutState = { AllQuestions: false, soundOn: true };

  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };

  componentDidMount() {
    const url = this.props.questionsUrl;
    axios
      .get<QuestionsCollection>(url, { maxRedirects: 2 })
      .then((res) => {
        this.setState({ ...this.state, AllQuestions: res.data });
      })
      .catch(() => {
        this.setState({ ...this.state, AllQuestions: allquestions as QuestionsCollection });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navigation
          AllQuestions={
            this.state.AllQuestions ? this.state.AllQuestions : { meta: { name: '...', id: '' }, questions: {} }
          }
          soundOn={this.state.soundOn}
          soundHandler={this.soundHandler}
        />

        {this.state.AllQuestions ? (
          <LearningContainer AllQuestions={this.state.AllQuestions} soundOn={this.state.soundOn} />
        ) : (
          <LoaderAnimation />
        )}
      </React.Fragment>
    );
  }
}
export default Layout;
