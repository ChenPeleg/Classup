import React, { Component } from "react";
import styles from "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import ErrorBoundary from "./hoc/ErrorBoundary/ErrorBoundary";
class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <div className={styles.App}>
          <Layout />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
