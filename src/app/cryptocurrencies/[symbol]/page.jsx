"use client";

import Panel from "@/components/background/Panel";
import MaxWidthContainer from "@/components/misc/MaxWidthContainer";
import { getData } from "@/systems/getData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import GetStarted from "./components/GetStarted";
import TrendingCoins from "./components/TrendingCoins";
import styles from "./styles.module.css";
import SymbolSummary from "./components/SymbolSummary";
import PerformanceSection from "./components/PerformanceSection";
import SentimentSection from "./components/SentimentSection";
import AboutSymbol from "./components/AboutSymbol";

export default function SymbolPage() {
  const params = useParams();
  const { symbol } = params;

  const [geckoData, setGeckoData] = useState(null);

  useEffect(() => {
    getData(
      `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      setGeckoData,
    );
  }, []);

  // loading
  if (geckoData === null) {
    return (
      <MaxWidthContainer>
        <Panel>Loading...</Panel>
      </MaxWidthContainer>
    );
  }

  // invalid symbol
  if (geckoData === false) {
    return (
      <MaxWidthContainer>
        <Panel>Invalid symbol: {symbol}</Panel>
      </MaxWidthContainer>
    );
  }

  // main page
  return (
    <MaxWidthContainer>
      <div className={styles.symbolPage}>
        <div className={styles.main}>
          <SymbolSummary geckoData={geckoData} />
          <PerformanceSection geckoData={geckoData} />
          <SentimentSection />
          <AboutSymbol geckoData={geckoData} />
          <div></div>
        </div>

        <div className={styles.promo}>
          <GetStarted />
          <TrendingCoins />
        </div>
      </div>
    </MaxWidthContainer>
  );
}
