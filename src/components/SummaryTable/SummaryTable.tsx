import styles from './SummaryTable.module.scss';
import { SummaryData } from '../../types/questions';

const preCenter = (small: number, big: number): number => {
  if (small && big) {
  } else return 0;
  const double = Math.floor(100 * (small / big));
  return double;
};

interface SummaryTableProps {
  summaryObject: SummaryData;
}

const SummaryTable = (props: SummaryTableProps) => {
  const { q0, q1, q23 } = props.summaryObject.mistakesObject;
  const total = props.summaryObject.numOfquestions;
  let p0 = preCenter(q0, total);
  let p1 = preCenter(q1, total);
  let p23 = preCenter(q23, total);

  // Ensure percentages add up to 100
  const sum = p0 + p1 + p23;
  if (sum > 0 && sum !== 100) {
    const diff = 100 - sum;
    p0 += diff;
  }

  return (
    <>
      <div>
        <table className={styles.sumTable}>
          <thead>
            <tr>
              <th>type of answer</th>
              <th>in numbers</th>
              <th>in precent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>without errors</td>
              <td>{q0}</td>
              <td>{p0}%</td>
            </tr>
            <tr>
              <td>on second attempt</td>
              <td>{q1}</td>
              <td>{p1}%</td>
            </tr>
            <tr>
              <td>after second attempt</td>
              <td>{q23}</td>
              <td>{p23}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SummaryTable;
