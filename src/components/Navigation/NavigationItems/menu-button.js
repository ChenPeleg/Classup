import React from "react";
import menuIcon from "./menu-button.svg";
import "./menu-button.scss";
const menuButton = (props) => (
  <img className="menu-button" src={menuIcon} alt="menu" />
);

export default menuButton;
