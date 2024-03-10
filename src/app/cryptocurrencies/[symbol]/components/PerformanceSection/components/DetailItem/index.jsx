import React from "react";
import styles from "./styles.module.css";

export default function DetailItem({ name, value }) {
  return (
    <div className={styles.detail}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
