import Panel from "@/components/background/Panel";
import React from "react";
import styles from "./styles.module.css";
import BrLine from "@/components/ui/BrLine";
import Scroller from "@/systems/ui/Scroller";
import CheckCard from "./components/CheckCard";
import InnerHTML from "@/systems/ui/InnerHTML";

export default function AboutSymbol({ geckoData }) {
  return (
    <Panel>
      <div className={styles.aboutSymbol}>
        <h3>About {geckoData.name}</h3>
        <h4>What is {geckoData.name}?</h4>
        <p>
          <InnerHTML>{geckoData.description.en}</InnerHTML>
        </p>
        <h4>Lorem ipsum dolor sit amet</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>

        <BrLine />

        <h3>Already Holding {geckoData.name}</h3>
        <Scroller>
          <CheckCard.A
            image={"/images/asset1.jpeg"}
            title={"Calculate your profits"}
            link={"/calculator"}
          />

          <CheckCard.B
            image={"/images/asset2.jpeg"}
            title={"Calculate your tax liability"}
            link={"/calculator"}
          />
        </Scroller>

        <BrLine />

        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </Panel>
  );
}
