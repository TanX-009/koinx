import React from "react";
import styles from "./styles.module.css";

export default function MaxWidthContainer({ children }) {
  return <div className={styles.maxWidthContainer}>{children}</div>;
}
