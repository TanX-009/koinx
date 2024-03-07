import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import Button from "../clickables/Button";
import KoinXLogo from "../misc/KoinXLogo";
import NavLinks from "./components/NavLinks";
import Hamburger from "./components/Hamburger";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <KoinXLogo.TypeA />
        <NavLinks />
        <Hamburger />
      </div>
    </div>
  );
}
