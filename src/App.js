import React, { Component } from "react";
import "./App.css";
import Uplogo from "./components/Uplogo/Uplogo.js";
import Qpanel from "./containers/Qpanel/Qpanel";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Uplogo />
        <Qpanel />
      </div>
    );
  }
}

export default App;
