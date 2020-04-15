import React from "react";
import styles from "./SummaryTable.module.scss";

const preCenter = (small, big) => {
  if (small && big) {
  } else return "0%";
  let double = Math.floor(100 * (small / big));
  return double + "%";
};
const SummaryTable = (props) => {
  const { q0, q1, q23 } = props.summaryObject.mistakesObject;
  const total = props.summaryObject.numOfquestions;
  const p0 = preCenter(q0, total);
  const p1 = preCenter(q1, total);
  const p23 = preCenter(q23, total);
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
              <td>{p0}</td>
            </tr>
            <tr>
              <td>on second attempt</td>
              <td>{q1}</td>
              <td>{p1}</td>
            </tr>
            <tr>
              <td>after second attempt</td>
              <td>{q23}</td>
              <td>{p23}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default SummaryTable;
