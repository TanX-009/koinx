import React from "react";
import styles from "./styles.module.css";

export default function DetailItem({ name, value }) {
  return (
    <div className={styles.detail}>
      <p className={styles.name}>{name}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
