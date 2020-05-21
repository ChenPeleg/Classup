import React, { Component } from "react";
import axios from "axios";
import allquestions from "./allquestions";
import LearningContainer from "../../containers/LearningContainer/LearningContainer";
import Navigation from "../../components/Navigation/Navigation";
import "./Layout.scss";
import LoaderAnimation from "../../components/UI/LoaderAnimation/LoaderAnimation";

class Layout extends Component {
  state = { allQuestions: false, soundOn: true };
  soundHandler = () => {
    this.setState({ ...this.state, soundOn: !this.state.soundOn });
  };
  componentDidMount() {

    const url = this.props.questions_url;
    axios.get(url, { crossdomain: true }).then((res) => {
      this.setState({ ...this.state, allQuestions: res.data });
    }).catch(() => {
      this.setState({ ...this.state, allQuestions: allquestions });
      // just for fallback, delete it for production. 
    })
  }
  render() {
    return (
      <React.Fragment >
        <Navigation
          allQuestions={
            this.state.allQuestions
              ? this.state.allQuestions
              : { meta: { name: "..." } }
          }
          soundOn={this.state.soundOn}
          soundHandler={this.soundHandler}
        />

        {
          this.state.allQuestions ? (
            <LearningContainer
              allQuestions={this.state.allQuestions}
              soundOn={this.state.soundOn}
            />
          ) : (
              <LoaderAnimation />
            )
        }
      </React.Fragment >
    );
  }
}
export default Layout;
