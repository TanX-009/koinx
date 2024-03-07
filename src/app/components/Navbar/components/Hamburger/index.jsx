"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Link from "@/app/components/clickables/Link";
import Button from "@/app/components/clickables/Button";
import styles from "./styles.module.css";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.hamburger}>
      <GiHamburgerMenu onClick={openMenu} />
      <div className={`${styles.menu} ${isOpen && styles.open}`}>
        <div className={styles.close}>
          <MdClose onClick={closeMenu} />
        </div>
        <div className={styles.links}>
          <Link.LowContrast href="/about">Crypto Taxes</Link.LowContrast>
          <Link.LowContrast href="/about">Free Tools</Link.LowContrast>
          <Link.LowContrast href="/about">Resource Center</Link.LowContrast>
          <Button.HighContrast>Get started</Button.HighContrast>
        </div>
      </div>
    </div>
  );
}
