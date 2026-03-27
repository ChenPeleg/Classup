import styles from './uplogo.module.scss';

interface UplogoProps {
  extraStyle?: string;
  className?: string;
}

const uplogo = (props: UplogoProps) => {
  return (
    <div className={[styles.logo, styles.LogoInHeader, props.extraStyle, props.className].join(' ')}>
      Class-Up!
    </div>
  );
};
export default uplogo;
