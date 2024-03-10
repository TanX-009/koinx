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
          <Image src={"/images/distribution.svg"} alt="Distribution" fill />
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
