import React, { Component } from "react";
import axios from "axios";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import Navigation from "../../components/Navigation/Navigation";
import allquestions from "./allquestions";
import "./Layout.scss";
import LoaderAnimation from "../../components/UI/LoaderAnimation/LoaderAnimation";

class Layout extends Component {
  state = { AllQuestions: false, soundOn: true };
  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };
  componentDidMount() {

    const url = this.props.questions_url;
    axios.get(url, { crossdomain: true }).then((res) => {
      this.setState({ ...this.state, AllQuestions: res.data });
    }).catch(() => { this.setState({ ...this.state, AllQuestions: allquestions }) });
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
