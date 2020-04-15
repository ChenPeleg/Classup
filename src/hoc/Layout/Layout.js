import React, { Component } from "react";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import AllQuestions from "../../containers/LearningContainer/allquestions";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.scss";

class Layout extends Component {
  state = { AllQuestions, soundOn: true };
  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar
          AllQuestions={this.state.AllQuestions}
          soundOn={this.state.soundOn}
          soundHandler={this.soundHandler}
        />
        <LearningContainer
          AllQuestions={this.state.AllQuestions}
          soundOn={this.state.soundOn}
        />
      </React.Fragment>
    );
  }
}
export default Layout;
