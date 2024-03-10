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
            sizes="(max-width: 1920px) 6.7708vw, (max-width: 1440px) 9.0278vw, (max-width: 1280px) 10.1562vw, (max-width: 1024px) 12.2070vw, (max-width: 800px) 15.0000vw, (max-width: 640px) 17.9688vw, (max-width: 460px) 25.0000vw, (max-width: 380px) 28.9474vw, 12.2734vw"
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
            sizes="(max-width: 1920px) 6.7708vw, (max-width: 1440px) 9.0278vw, (max-width: 1280px) 10.1562vw, (max-width: 1024px) 12.2070vw, (max-width: 800px) 15.0000vw, (max-width: 640px) 17.9688vw, (max-width: 460px) 25.0000vw, (max-width: 380px) 28.9474vw, 12.2734vw"
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
