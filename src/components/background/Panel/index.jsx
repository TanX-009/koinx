import React from "react";
import Gradient from "./components/Gradient";
import Highlight from "./components/Highlight";
import styles from "./styles.module.css";

function Panel({ children }) {
  return <div className={styles.panel}>{children}</div>;
}

Panel.Gradient = Gradient;
Panel.Highlight = Highlight;

export default Panel;
