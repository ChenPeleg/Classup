import React from "react";
import menuIcon from "./menu-button.svg";
import xIcon from "./xbutton.png";
import styles from "./menu-button.module.scss";
const menuButton = (props) => (
  <img className={styles.menuButton} src={props.isOpen ? xIcon : menuIcon} alt="menu" onClick={
    () => props.toggleDrawer()} />
);

export default menuButton;
