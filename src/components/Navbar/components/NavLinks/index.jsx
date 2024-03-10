import React from "react";
import styles from "./styles.module.css";
import Link from "@/components/clickables/Link";
import Button from "@/components/clickables/Button";

export default function NavLinks() {
  return (
    <div className={styles.navLinks}>
      <Link.LowContrast href="">Crypto Taxes</Link.LowContrast>
      <Link.LowContrast href="">Free Tools</Link.LowContrast>
      <Link.LowContrast href="">Resource Center</Link.LowContrast>
      <Button.HighContrast>Get started</Button.HighContrast>
    </div>
  );
}
