import React from "react";
import styles from "./SummaryTable.module.scss";
import util from "../../Utility/Utility";

const preCenter = (small, big) => {
  if (small && big) {
  } else return 0;
  let double = Math.floor(100 * (small / big));
  return double;
};
const SummaryTable = (props) => {
  const { q0, q1, q23 } = props.summaryObject.mistakesObject;
  const total = props.summaryObject.numOfquestions;
  let p0 = preCenter(q0, total);
  let p1 = preCenter(q1, total);
  let p23 = preCenter(q23, total);
  const ob = { p0, p1, p23 };
  const pre = util.roundTo100(ob);

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
              <td>{pre.p0}%</td>
            </tr>
            <tr>
              <td>on second attempt</td>
              <td>{q1}</td>
              <td>{pre.p1}%</td>
            </tr>
            <tr>
              <td>after second attempt</td>
              <td>{q23}</td>
              <td>{pre.p23}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SummaryTable;
