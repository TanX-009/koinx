import Panel from "@/components/background/Panel";
import React from "react";
import styles from "./styles.module.css";

export default function InfoCard({
  iconBackground,
  background,
  icon,
  title,
  description,
}) {
  return (
    <Panel.Highlight background={background}>
      <div className={styles.infoCard}>
        <div
          className={styles.icon}
          style={{ backgroundColor: iconBackground }}
        >
          {icon}
        </div>
        <div className={styles.info}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Panel.Highlight>
  );
}
