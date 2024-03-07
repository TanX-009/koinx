import React from "react";
import styles from "./styles.module.css";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

function High({ children }) {
  return (
    <div className={styles.high}>
      <GoTriangleUp /> {children}
    </div>
  );
}

function Low({ children }) {
  return (
    <div className={styles.low}>
      <GoTriangleDown /> {children}
    </div>
  );
}

function Change() {
  return <></>;
}

Change.High = High;
Change.Low = Low;

export default Change;
