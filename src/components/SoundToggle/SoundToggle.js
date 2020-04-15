import React from "react";
import volumeOn from "./volumeon.png";
import volumeOff from "./volumeoff.png";
import styles from "./SoundToggle.module.scss";
const SoundToggle = (props) => {
  return (
    <img
      src={props.soundOn ? volumeOn : volumeOff}
      className={styles.soundToggle}
      onClick={() => {
        props.soundHandler();
      }}
      alt="volume toggle"
    />
  );
};
export default SoundToggle;
