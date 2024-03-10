import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TypeA({ size = "", priority = false }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <Image
        src={"/images/koinx.svg"}
        alt="KoinX"
        priority={priority}
        fill
        sizes="(max-width: 30em) 60vw, (max-width: 80em) 20vw, (max-width: 120em) 10vw, 18vw"
      />
    </div>
  );
}
