import menuIcon from './menu-button.svg';
import xIcon from './xbutton.png';
import styles from './menu-button.module.scss';

interface MenuButtonProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const menuButton = (props: MenuButtonProps) => (
  <img
    className={styles.menuButton}
    src={props.isOpen ? xIcon : menuIcon}
    alt="menu"
    onClick={() => props.toggleDrawer()}
  />
);

export default menuButton;
