import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TypeA({ size = "" }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <Image
        src={"/images/koinx.svg"}
        alt="KoinX"
        fill
        sizes="(max-width: 1920px) 7.0312vw, (max-width: 1280px) 10.5469vw, (max-width: 540px) 24.0741vw, (max-width: 800px) 16.2500vw, (max-width: 1024px) 13.1836vw, 11.9518vw"
      />
    </div>
  );
}
