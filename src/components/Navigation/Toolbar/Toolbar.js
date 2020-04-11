import React from "react";
import styles from "./Toolbar.module.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";

import SubjectHeader from "../../SubjectHeader/SubjectHeader";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div style={{ alignSelf: "flex-start" }}>
      <MenuButton /> {"\u00A0"} <Uplogo />
    </div>

    <SubjectHeader text={props.AllQuestions.meta.name} />

    <div
      style={{ verticalAlign: "middle", color: "green", margin: " auto 0 " }}
    >
      Logged In{" "}
      <span role="img" aria-label="login">
        👤
      </span>
    </div>
  </header>
);
export default toolbar;
