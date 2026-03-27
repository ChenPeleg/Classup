import styles from './Mark.module.scss';
import Vmark from '../../assets/images/check-mark.svg';
import Xmark from '../../assets/images/x-mark.svg';
import { ResultType } from '../../types/questions';

interface MarkProps {
  markedAnswer: ResultType;
}

const mark = (props: MarkProps) => {
  return (
    <div className={styles.checkMarkWrapper}>
      <img
        src={props.markedAnswer === 'RIGHT' ? Vmark : Xmark}
        className={styles.checkMark}
        alt={props.markedAnswer}
      />
    </div>
  );
};
export default mark;
