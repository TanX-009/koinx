import Panel from "@/components/background/Panel";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getData } from "@/systems/getData";
import Change from "@/components/ui/Change";
import Link from "@/components/clickables/Link";
import round from "@/systems/math/round";
import SymbolLogo from "@/components/misc/SymbolLogo";

function TrendingCoin({ image, name, symbol, value, id }) {
  return (
    <Link.LowContrast href={"/cryptocurrencies/" + id}>
      <div className={styles.trendingCoin}>
        <div className={styles.symbolContainer}>
          <SymbolLogo link={image} name={name} />
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
