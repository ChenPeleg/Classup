import React from "react";
import "./Toolbar.scss";
import Uplogo from "../../Uplogo/Uplogo";
import MenuButton from "../NavigationItems/menu-button";
import AllQuestionsContext from "../../../context/AllQuestions-context";
import SubjectHeader from "../../SubjectHeader/SubjectHeader";

const toolbar = (props) => (
  <header className="Toolbar">
    <MenuButton />
    {"\u00A0"} {"\u00A0"}
    <Uplogo className="Logo-in-Header" /> {"\u00A0"} {"\u00A0"} {"\u00A0"}
    <AllQuestionsContext.Consumer>
      {(context) => <SubjectHeader text={context.meta.name} />}
    </AllQuestionsContext.Consumer>
  </header>
);
export default toolbar;
