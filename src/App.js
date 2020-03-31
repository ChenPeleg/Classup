import React, { Component } from "react";
import "./App.css";
import Uplogo from "./components/Uplogo/Uplogo.js";
import Qpanel from "./containers/Qpanel/Qpanel";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Uplogo />
        <p>What is the color of sky?</p>
        <Qpanel />
      </div>
    );
  }
}

export default App;
