import React from "react";
import styles from "./styles.module.css";
import Panel from "@/components/background/Panel";
import Image from "next/image";
import Button from "@/components/clickables/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function GetStarted() {
  return (
    <Panel.Highlight background={"var(--pri-dark)"} color={"var(--txt-light)"}>
      <div className={styles.getStarted}>
        <h2 className={styles.title}>Get Started with KoinX for FREE</h2>
        <p className={styles.info}>
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <div className={styles.imgContainer}>
          <Image src={"/images/promo.svg"} alt={"Get Started"} fill />
        </div>
        <Button.LowContrast>
          Get Started for FREE <FaArrowRightLong />
        </Button.LowContrast>
      </div>
    </Panel.Highlight>
  );
}
