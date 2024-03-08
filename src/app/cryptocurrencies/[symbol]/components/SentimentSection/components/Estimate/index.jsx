import React from "react";
import styles from "./styles.module.css";

export default function Estimate({ buy, hold, sell }) {
  const scale = "(var(--space-5xs-2xs) / 3)";
  return (
    <div className={styles.estimate}>
      <div className={styles.buyCircle}>
        {buy}
        <span>%</span>
      </div>
      <div className={styles.bars}>
        <div className={styles.barContainer}>
          <p>Buy&nbsp;&nbsp;&nbsp;</p>
          <div
            className={`${styles.bar} ${styles.green}`}
            style={{ width: `calc(${buy} * ${scale})` }}
          ></div>
          <p>{buy}%</p>
        </div>
        <div className={styles.barContainer}>
          <p>Hold&nbsp;</p>
          <div
            className={`${styles.bar} ${styles.grey}`}
            style={{ width: `calc(${hold} * ${scale})` }}
          ></div>
          <p>{hold}%</p>
        </div>
        <div className={styles.barContainer}>
          <p>Sell&nbsp;&nbsp;&nbsp;</p>
          <div
            className={`${styles.bar} ${styles.red}`}
            style={{ width: `calc(${sell} * ${scale})` }}
          ></div>
          <p>{sell}%</p>
        </div>
      </div>
    </div>
  );
}
