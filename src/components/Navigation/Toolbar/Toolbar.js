import React from "react";
import styles from "./Toolbar.module.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";
import SoundToggle from "../../SoundToggle/SoundToggle";
import SubjectHeader from "../../SubjectHeader/SubjectHeader";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div style={{ alignSelf: "flex-start" }}>
      <MenuButton /> {"\u00A0"} <Uplogo />
    </div>

    <SubjectHeader text={props.AllQuestions.meta.name} />
    <div
      style={{
        display: "inline",
        verticalAlign: "middle",
        color: "green",
        margin: " auto 0 ",
        position: "relative",
        paddingRight: "50px",
      }}
    >
      Logged In{" "}
      <span role="img" aria-label="login">
        👤
      </span>{" "}
      <SoundToggle soundHandler={props.soundHandler} soundOn={props.soundOn} />
    </div>
  </header>
);
export default toolbar;
