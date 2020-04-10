import React from "react";
import styles from "./uplogo.module.scss";

const uplogo = (props) => {
  return (
    <div className={styles.logo + " " + styles.LogoInHeader}>Class-Up!</div>
  );
};
export default uplogo;
