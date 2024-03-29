"use client";

import React from "react";
import Panel from "@/components/background/Panel";
import MaxWidthContainer from "@/components/misc/MaxWidthContainer";
import { getData } from "@/systems/getData";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AboutSymbol from "./components/AboutSymbol";
import GetStarted from "./components/GetStarted";
import PerformanceSection from "./components/PerformanceSection";
import SentimentSection from "./components/SentimentSection";
import SymbolSummary from "./components/SymbolSummary";
import Teams from "./components/Teams";
import Tokenomics from "./components/Tokenomics";
import TrendingCoins from "./components/TrendingCoins";
import YouMayAlsoLike from "./components/YouMayAlsoLike";
import styles from "./styles.module.css";

export default function SymbolPage() {
  const params = useParams();
  const { symbol } = params;

  const [geckoData, setGeckoData] = useState(null);

  useEffect(() => {
    getData(
      `https://api.coingecko.com/api/v3/coins/${symbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
      setGeckoData,
    );
  }, [symbol]);

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
          <Tokenomics />
          <Teams />
          <div></div>
        </div>

        <div className={styles.promo}>
          <GetStarted />
          <TrendingCoins />
          <div></div>
        </div>
      </div>
      <YouMayAlsoLike />
      <div className={styles.space}></div>
    </MaxWidthContainer>
  );
}
