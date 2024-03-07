import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function SymbolLogo({ link, name }) {
  return (
    <div className={styles.symbolLogo}>
      <Image src={link} alt={name} fill />
    </div>
  );
}
