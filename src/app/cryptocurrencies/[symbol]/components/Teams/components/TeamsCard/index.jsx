import Panel from "@/components/background/Panel";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function TeamsCard({ image, name, designation, description }) {
  return (
    <Panel.Highlight background={"var(--pri-light)"}>
      <div className={styles.teamsCard}>
        <div className={styles.imageSection}>
          <div className={styles.imgContainer}>
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 30em) 60vw, (max-width: 80em) 30vw, (max-width: 120em) 20vw, 8vw"
            />
          </div>
          <h4>{name}</h4>
          <p>{designation}</p>
        </div>
        <div className={styles.infoSection}>
          <p>{description}</p>
        </div>
      </div>
    </Panel.Highlight>
  );
}
