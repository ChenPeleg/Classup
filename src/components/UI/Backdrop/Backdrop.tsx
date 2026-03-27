import classes from './Backdrop..module.scss';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const backdrop = (props: BackdropProps) =>
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null;

export default backdrop;
