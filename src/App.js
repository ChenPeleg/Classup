import React, { Component } from "react";
import "./App.css";
import Question from "./Question/Question";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi this IS chen's New react!</h1>
        <p>this is really working!</p>
        <Question />
        <Question />
        <Question />
      </div>
    );
  }
}

export default App;
