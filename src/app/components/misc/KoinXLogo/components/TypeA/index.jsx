import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function TypeA({ size = "" }) {
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <Image src={"/images/koinx.svg"} alt="KoinX" fill />
    </div>
  );
}
