"use client";

import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function LowContrast({
  children,
  link = false,
  onClick = false,
}) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type="button"
      onClick={
        onClick
          ? onClick
          : link
            ? () => {
                router.push(link);
              }
            : () => {}
      }
    >
      {children}
    </button>
  );
}
