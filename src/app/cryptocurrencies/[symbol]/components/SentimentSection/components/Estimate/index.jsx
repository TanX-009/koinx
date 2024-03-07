import React from "react";
import styles from "./styles.module.css";

export default function Estimate({ buy, hold, sell }) {
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
            style={{ width: `calc(${buy} * var(--space-6xs-5xs))` }}
          ></div>
          <p>{buy}%</p>
        </div>
        <div className={styles.barContainer}>
          <p>Hold&nbsp;</p>
          <div
            className={`${styles.bar} ${styles.grey}`}
            style={{ width: `calc(${hold} * var(--space-6xs-5xs))` }}
          ></div>
          <p>{hold}%</p>
        </div>
        <div className={styles.barContainer}>
          <p>Sell&nbsp;&nbsp;&nbsp;</p>
          <div
            className={`${styles.bar} ${styles.red}`}
            style={{ width: `calc(${sell} * var(--space-6xs-5xs))` }}
          ></div>
          <p>{sell}%</p>
        </div>
      </div>
    </div>
  );
}
