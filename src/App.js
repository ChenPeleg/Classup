import React, { Component } from "react";
import styles from "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from "./hoc/ErrorBoundary/ErrorBoundary";
const questionUrl = "allquestions.json";
// this is for local file in the Public folder"
// you can change it to "http://mysite/question.json"

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className={styles.App}>
          <Layout questionsUrl={questionUrl} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
