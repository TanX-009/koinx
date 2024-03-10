import Panel from "@/components/background/Panel";
import Button from "@/components/clickables/Button";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./styles.module.css";

function A({ image, title, link }) {
  return (
    <Panel.Highlight background={"var(--grad-1)"} color="var(--txt-light)">
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            alt="check now"
            fill
            sizes="(max-width: 30em) 60vw, (max-width: 80em) 30vw, (max-width: 120em) 20vw, 8vw"
          />
        </div>
        <div className={styles.infoContainer}>
          <h3>{title}</h3>
          <Button.LowContrast link={link}>
            Check Now <FaArrowRightLong />
          </Button.LowContrast>
        </div>
      </div>
    </Panel.Highlight>
  );
}
function B({ image, title, link }) {
  return (
    <Panel.Highlight background={"var(--grad-2)"} color="var(--txt-light)">
      <div className={styles.cardContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            alt="check now"
            fill
            sizes="(max-width: 30em) 60vw, (max-width: 80em) 30vw, (max-width: 120em) 20vw, 8vw"
          />
        </div>
        <div className={styles.infoContainer}>
          <h3>{title}</h3>
          <Button.LowContrast link={link}>
            Check Now <FaArrowRightLong />
          </Button.LowContrast>
        </div>
      </div>
    </Panel.Highlight>
  );
}

function CheckCard() {
  return <></>;
}

CheckCard.A = A;
CheckCard.B = B;

export default CheckCard;
