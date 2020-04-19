import React, { Component } from "react";
import axios from "axios";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.scss";
import LoaderAnimation from "../../components/LoaderAnimation/LoaderAnimation";

class Layout extends Component {
  state = { AllQuestions: false, soundOn: false };
  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };
  componentDidMount() {
    let url =
      "https://click123.s3.eu-west-2.amazonaws.com/classUp_dev/allquestions.json";
    url = "allquestions.json"; // for local file
    axios.get(url, { crossdomain: true }).then((res) => {
      this.setState({ ...this.state, AllQuestions: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navigation
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
