import React, { Component } from "react";
import axios from "axios";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.scss";
import LoaderAnimation from "../../components/LoaderAnimation/LoaderAnimation";

class Layout extends Component {
  state = { AllQuestions: false, soundOn: true };
  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };
  componentDidMount() {
    // https://click123.s3.eu-west-2.amazonaws.com/classUp_dev/allquestions.json
    let url =
      "https://click123.s3.eu-west-2.amazonaws.com/classUp_dev/allquestions.json";
    axios.get(url, { crossdomain: true }).then((res) => {
      this.setState({ ...this.state, AllQuestions: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Toolbar
          AllQuestions={
            this.state.AllQuestions
              ? this.state.AllQuestions
              : { meta: { name: "..." } }
          }
          soundOn={this.state.soundOn}
          soundHandler={this.soundHandler}
        />

        {this.state.AllQuestions ? (
          <LearningContainer
            AllQuestions={this.state.AllQuestions}
            soundOn={this.state.soundOn}
          />
        ) : (
          <LoaderAnimation />
        )}
      </React.Fragment>
    );
  }
}
export default Layout;
