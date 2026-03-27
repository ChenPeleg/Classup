import styles from './SubjectHeader.module.scss';

interface SubjectHeaderProps {
  text: string;
}

const subjectHeader = (props: SubjectHeaderProps) => (
  <p className={styles.subjectHeader}>{props.text}</p>
);

export default subjectHeader;
