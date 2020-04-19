import React from "react";
import styles from "./Navigation.module.scss";
import Toolbar from "./Toolbar/Toolbar"
import SideDrawer from "./SideDrawer/SideDrawer"
const navigation = (props) => {
    return <Toolbar {...props}></Toolbar>
};
export default navigation