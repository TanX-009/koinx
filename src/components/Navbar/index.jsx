import React from "react";
import styles from "./styles.module.css";
import KoinXLogo from "../misc/KoinXLogo";
import NavLinks from "./components/NavLinks";
import Hamburger from "./components/Hamburger";
import Link from "../clickables/Link";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link.LowContrast href={"/"}>
          <KoinXLogo.TypeA />
        </Link.LowContrast>
        <NavLinks />
        <Hamburger />
      </div>
    </div>
  );
}
