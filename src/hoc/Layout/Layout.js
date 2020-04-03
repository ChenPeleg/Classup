import React, { Component } from "react";
import Uplogo from "../../components/Uplogo/Uplogo";
import Qpanel from "../../containers/Qpanel/Qpanel";
import "./Layout.css";
class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Uplogo />
        <Qpanel />
      </React.Fragment>
    );
  }
}
export default Layout;
