import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function LowContrast({ children, href }) {
  return (
    <Link className={styles.link} href={href}>
      {children}
    </Link>
  );
}
