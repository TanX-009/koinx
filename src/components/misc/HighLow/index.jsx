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
  const triangle = useRef(null);

  const [leftDistance, setLeftDistance] = useState(0);
  const [leftTriangleDistance, setLeftTriangleDistance] = useState(0);

  useEffect(() => {
    if (current && bar && arrow) {
      const percentagePosition = (currentRaw - lowRaw) / (highRaw - lowRaw);
      const dist =
        percentagePosition * bar.current.clientWidth -
        triangle.current.clientWidth;
      const trangleDist =
        percentagePosition * arrow.current.clientWidth -
        percentagePosition * triangle.current.clientWidth;
      setLeftDistance(Math.floor(dist));
      setLeftTriangleDistance(Math.floor(trangleDist));
    }
  }, [bar, arrow, currentRaw, lowRaw, highRaw, current]);

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
                leftDistance - leftTriangleDistance
              }px`,
            }}
          >
            <div
              ref={triangle}
              style={{
                paddingLeft: `${leftTriangleDistance}px`,
                width: "fit-content",
              }}
            >
              <GoTriangleUp />
            </div>
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
