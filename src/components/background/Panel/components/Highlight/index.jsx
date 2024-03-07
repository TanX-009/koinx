import React from "react";
import styles from "./styles.module.css";

export default function Highlight({
  children,
  background,
  color = "var(--txt-dark)",
}) {
  return (
    <div
      className={styles.highlight}
      style={{ backgroundColor: background, color: color }}
    >
      {children}
    </div>
  );
}
