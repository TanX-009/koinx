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
          <Image
            src={"/images/promo.svg"}
            alt={"Get Started"}
            fill
            sizes="(max-width: 1920px) 9.8958vw, (max-width: 1440px) 13.1944vw, (max-width: 1280px) 14.4531vw, (max-width: 1024px) 17.5781vw, (max-width: 800px) 21.8750vw, (max-width: 640px) 26.5625vw, (max-width: 480px) 35.4167vw, (max-width: 380px) 43.4211vw, 17.8930vw"
          />
        </div>
        <Button.LowContrast>
          Get Started for FREE <FaArrowRightLong />
        </Button.LowContrast>
      </div>
    </Panel.Highlight>
  );
}
