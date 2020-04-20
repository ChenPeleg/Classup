import React from "react";
import menuIcon from "./menu-button.svg";
import styles from "./menu-button.module.scss";
const menuButton = (props) => (
  <img className={styles.menuButton} src={menuIcon} alt="menu" />
);

export default menuButton;
