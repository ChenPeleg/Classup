import { useState } from 'react';
// import styles from "./Navigation.module.scss";
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import MenuButton from './MenuButton/menu-button';
import { QuestionsCollection } from '../../types/questions';

interface NavigationProps {
  AllQuestions: QuestionsCollection;
  soundHandler: () => void;
  soundOn: boolean;
}

const Navigation = (props: NavigationProps) => {
  const [isDrawerOpen, setDrawer] = useState(false);
  const toglleDrawer = () => {
    setDrawer(!isDrawerOpen);
  };
  return (
    <>
      <Toolbar {...props}></Toolbar>
      <SideDrawer {...props} isOpen={isDrawerOpen}></SideDrawer>{' '}
      <MenuButton isOpen={isDrawerOpen} toggleDrawer={toglleDrawer} />{' '}
    </>
  );
};
export default Navigation;
