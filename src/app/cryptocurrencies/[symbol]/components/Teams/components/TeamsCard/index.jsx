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
              sizes="(max-width: 1920px) 7.2917vw, (max-width: 1440px) 9.7222vw, (max-width: 1280px) 10.9375vw, (max-width: 1024px) 13.6719vw, (max-width: 800px) 16.2500vw, (max-width: 640px) 20.3125vw, (max-width: 480px) 26.0417vw, (max-width: 380px) 32.8947vw, 13.4355vw"
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
