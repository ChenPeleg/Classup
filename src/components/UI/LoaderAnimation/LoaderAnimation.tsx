import styles from './LoaderAnimation.module.scss';

const LoaderAnimation = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className={styles.loader}></div>Loading...
    </div>
  );
};
export default LoaderAnimation;
