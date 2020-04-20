import React from "react";
import styles from "./LoaderAnimation.module.scss";

const LoaderAnimation = (props) => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.loader}></div>Loading...
    </div>
  );
};
export default LoaderAnimation;
