import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function SymbolLogo({ link, name }) {
  return (
    <div className={styles.symbolLogo}>
      <Image
        src={link}
        alt={name}
        fill
        sizes="(max-width: 30em) 25vw, (max-width: 80em) 15vw, (max-width: 120em) 10vw, 8vw"
      />
    </div>
  );
}
