import React, { Component } from "react";
import "./App.css";
import Question from "./components/Question/Question";
import Uplogo from "./components/Uplogo/Uplogo.js";

class App extends Component {
  answerHandler = event => {
    alert("clicked");
  };

  render() {
    return (
      <div className="App">
        <Uplogo />
        <p>What is the color of sky?</p>
        <Question click={this.answerHandler} />
      </div>
    );
  }
}

export default App;
