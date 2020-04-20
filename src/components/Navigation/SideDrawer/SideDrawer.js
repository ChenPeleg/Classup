import React from "react";
import styles from "./SideDrawer.module.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../../UI/MenuButton/menu-button";
import SoundToggle from "../../SoundToggle/SoundToggle";

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <header className={attachedClasses.join(' ')}>
      <div >
        <MenuButton /> {"\u00A0"} <Uplogo className={styles.mediaQuery} />
        <br></br><br></br>
      Logged In{" "}
        <span role="img" aria-label="login">
          👤
      </span>{" "} <br></br><br></br>
        Sound <SoundToggle soundHandler={props.soundHandler} soundOn={props.soundOn} InSideDrawer={true} />
      </div>
    </header>
  )
};
export default sideDrawer;
