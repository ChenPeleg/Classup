import React, { Component } from "react";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import AllQuestions from "../../containers/LearningContainer/allquestions";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.scss";

class Layout extends Component {
  state = { AllQuestions };
  render() {
    return (
      <React.Fragment>
        <Toolbar AllQuestions={this.state.AllQuestions} />
        <LearningContainer AllQuestions={this.state.AllQuestions} />
      </React.Fragment>
    );
  }
}
export default Layout;
