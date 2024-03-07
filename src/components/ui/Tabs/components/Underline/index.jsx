import React from "react";
import styles from "./styles.module.css";

export default function Underline({ current, setter, tabs }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setter(tab)}
          className={current === tab ? styles.active : styles.inactive}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
