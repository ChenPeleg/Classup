import styles from './Toolbar.module.scss';
import Uplogo from '../../Uplogo/Uplogo';

import SoundToggle from '../../SoundToggle/SoundToggle';
import SubjectHeader from '../../SubjectHeader/SubjectHeader';
import { QuestionsCollection } from '../../../types/questions';

interface ToolbarProps {
  AllQuestions: QuestionsCollection;
  soundHandler: () => void;
  soundOn: boolean;
}

const toolbar = (props: ToolbarProps) => (
  <header className={styles.Toolbar}>
    <div className={styles.leftSideOftoolBar}>
      <Uplogo className={styles.mediaQuery} /> {'\u00A0'}
    </div>
    <div>
      <SubjectHeader text={'\u00a0\u00a0\u00a0\u00a0' + props.AllQuestions.meta.name} />
    </div>

    <div className={styles.rightSideOftoolBar}>
      Logged In{' '}
      <span role="img" aria-label="login">
        👤
      </span>{' '}
      {'\u00a0'}
      {'\u00a0'}
      {'\u00a0'}
      {'\u00a0'}
      {'\u00a0'}
      <SoundToggle soundHandler={props.soundHandler} soundOn={props.soundOn} InSideDrawer={false} />
    </div>
  </header>
);
export default toolbar;
