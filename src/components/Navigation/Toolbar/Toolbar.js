import React from "react";
import "./Toolbar.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";
// import MenuButton form "../";

const toolbar = (props) => (
  <header className="Toolbar">
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <MenuButton />
    <div className="Logo">
      <Uplogo />
    </div>
    <nav className={"DesktopOnly"}>Menu Score Help</nav>
  </header>
);
export default toolbar;
