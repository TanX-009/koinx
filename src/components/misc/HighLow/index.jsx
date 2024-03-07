import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { GoTriangleUp } from "react-icons/go";

export default function HighLow({
  low,
  high,
  lowRaw,
  highRaw,
  lowTitle,
  highTitle,
  current = false,
  currentRaw,
}) {
  const bar = useRef(null);
  const arrow = useRef(null);
  const [leftDistance, setLeftDistance] = useState(0);

  useEffect(() => {
    if (current && bar) {
      const percentagePosition = (currentRaw - lowRaw) / (highRaw - lowRaw);
      const dist = percentagePosition * bar.current.clientWidth;
      setLeftDistance(dist);
    }
  }, [bar]);

  return (
    <div className={styles.highLow}>
      <div className={styles.low}>
        <p>{lowTitle}</p>
        <p>{low}</p>
      </div>
      <div className={`${styles.current} ${current && styles.withBar}`}>
        <div className={styles.bar} ref={bar}></div>
        {current && (
          <div
            className={styles.arrow}
            ref={arrow}
            style={{
              paddingLeft: `${
                arrow?.current?.clientWidth &&
                leftDistance - arrow.current.clientWidth / 2
              }px`,
            }}
          >
            <GoTriangleUp />
            {current}
          </div>
        )}
      </div>
      <div className={styles.high}>
        <p>{highTitle}</p>
        <p>{high}</p>
      </div>
    </div>
  );
}
