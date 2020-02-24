import React, { Component } from "react";
import "./App.css";
import Question from "./Question/Question";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi this IS chen's New react!</h1>
        <p>this is really working!</p>
        <Question />
      </div>
    );
  }
}

export default App;
