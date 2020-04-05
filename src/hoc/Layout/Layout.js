import React, { Component } from "react";
import Qpanel from "../../containers/Qpanel/Qpanel";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import "./Layout.scss";
class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />

        <Qpanel />
      </React.Fragment>
    );
  }
}
export default Layout;
