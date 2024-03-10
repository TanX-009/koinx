import Panel from "@/components/background/Panel";
import Scroller from "@/systems/ui/Scroller";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getData } from "@/systems/getData";
import SparklineCard from "./components/SparklineCard";

export default function YouMayAlsoLike() {
  const [geckoTrending, setGeckoTrending] = useState(null);

  useEffect(() => {
    getData(
      `https://api.coingecko.com/api/v3/search/trending`,
      setGeckoTrending,
    );
  }, []);

  // loading
  if (geckoTrending === null) {
    return <Panel>Loading...</Panel>;
  }

  return (
    <Panel>
      <div className={styles.youMayAlsoLike}>
        <h3>You May Also Like</h3>
        <Scroller>
          {geckoTrending.coins.map((coin, key) => (
            <SparklineCard key={key} coin={coin.item} />
          ))}
        </Scroller>
      </div>
    </Panel>
  );
}
