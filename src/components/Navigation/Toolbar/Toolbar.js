import React from "react";
import "./Toolbar.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";
import AllQuestionsContext from "../../../context/AllQuestions-context";
// import MenuButton form "../";

const toolbar = (props) => (
  <header className="Toolbar">
    <MenuButton /> {console.log(AllQuestionsContext)}
    {"\u00A0"} {"\u00A0"} {"\u00A0"}
    <Uplogo className="Logo-in-Header" />{" "}
    <AllQuestionsContext.Consumer>
      {(context) => <span>{context.meta.name}</span>}
    </AllQuestionsContext.Consumer>
  </header>
);
export default toolbar;
