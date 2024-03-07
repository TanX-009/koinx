import Panel from "@/components/background/Panel";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Tokenomics() {
  return (
    <Panel>
      <div className={styles.tokenomics}>
        <h3>Tokenomics</h3>
        <h4>Initial Distribution</h4>
        <div className={styles.imgContainer}>
          <Image
            src={"/images/distribution.svg"}
            alt="Distribution"
            fill
            sizes="(max-width: 1920px) 19.7917vw, (max-width: 1280px) 29.6875vw, (max-width: 980
px) 38.7755vw, (max-width: 800px) 47.5000vw, (max-width: 640px) 59.3750vw, (max-widt
h: 460px) 82.6087vw, (max-width: 360px) 83.3333vw, (max-width: 300px) 76.6667vw, 41.
6914vw"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </Panel>
  );
}
