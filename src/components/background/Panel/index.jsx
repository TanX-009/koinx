import React from "react";
import Highlight from "./components/Highlight";
import styles from "./styles.module.css";

function Panel({ children }) {
  return <div className={styles.panel}>{children}</div>;
}

Panel.Highlight = Highlight;

export default Panel;
