import React from "react";
import classes from "./Toolbar.css";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";
// import MenuButton form "../";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <MenuButton />
    <div className={classes.Logo}>
      <Uplogo />
    </div>
    <nav className={classes.DesktopOnly}>Menu Score Help</nav>
  </header>
);
export default toolbar;
