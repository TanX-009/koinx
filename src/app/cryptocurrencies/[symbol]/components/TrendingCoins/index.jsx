import Panel from "@/components/background/Panel";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getData } from "@/systems/getData";
import Change from "@/components/ui/Change";
import Image from "next/image";
import Link from "@/components/clickables/Link";
import round from "@/systems/math/round";

function TrendingCoin({ image, name, symbol, value, id }) {
  return (
    <Link.LowContrast href={"/cryptocurrencies/" + id}>
      <div className={styles.trendingCoin}>
        <div className={styles.symbolContainer}>
          <div className={styles.imgContainer}>
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 1920px) 7.0312vw, (max-width: 1280px) 10.5469vw, (max-width: 540px) 24.0741vw, (max-width: 800px) 16.2500vw, (max-width: 1024px) 13.1836vw, 11.9518vw"
            />
          </div>
          {name} ({symbol})
        </div>
        <Change value={value} postfix="%" />
      </div>
    </Link.LowContrast>
  );
}

export default function TrendingCoins() {
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
      <div className={styles.trendingCoins}>
        <h3>Trending Coins (24h)</h3>

        {geckoTrending.coins.map((coin, key) => (
          <TrendingCoin
            key={key}
            id={coin.item.id}
            image={coin.item.small}
            name={coin.item.name}
            symbol={coin.item.symbol}
            value={round(coin.item.data.price_change_percentage_24h.usd)}
          />
        ))}
      </div>
    </Panel>
  );
}
