import Panel from "@/components/background/Panel";
import React, { useState } from "react";
import SymbolLogo from "./components/SymbolLogo";
import styles from "./styles.module.css";
import parseCurrency from "@/systems/parseCurrency";
import BrLine from "@/components/ui/BrLine";
import Change from "@/components/ui/Change";
import Tabs from "@/components/ui/Tabs";
import TradingViewWidget from "./components/TradingViewWidget";

export default function SymbolSummary({ geckoData }) {
  const [dateRange, setDateRange] = useState("5D");
  const range = ["1D", "5D", "1M", "3M", "6M", "1Y", "5Y", "ALL"];

  return (
    <Panel>
      <div className={styles.aboutSymbol}>
        <div className={styles.symbolLogoName}>
          <SymbolLogo link={geckoData.image.small} name={geckoData.name} />
          <h1>{geckoData.name}</h1>
          <p className={styles.symbol}>{geckoData.symbol.toUpperCase()}</p>
          <p className={styles.rank}>Rank #{geckoData.market_cap_rank}</p>
        </div>
        <div className={styles.price}>
          <h2>
            {parseCurrency(geckoData.market_data.current_price.usd, "USD")}{" "}
            <span className={styles.change}>
              {geckoData.market_data.market_cap_change_percentage_24h > 0 ? (
                <Change.High>
                  {geckoData.market_data.market_cap_change_percentage_24h}%
                </Change.High>
              ) : (
                <Change.Low>
                  {geckoData.market_data.market_cap_change_percentage_24h}%
                </Change.Low>
              )}
              <span className={styles.capChangeDuration}>(24H)</span>
            </span>
          </h2>
          <h2 className={styles.priceINR}>
            {parseCurrency(geckoData.market_data.current_price.inr, "INR")}
          </h2>
        </div>
        <BrLine />

        <div className={styles.chartDuration}>
          <h4>{geckoData.name} Price Chart (USD)</h4>

          <Tabs.Background
            current={dateRange}
            setter={setDateRange}
            tabs={range}
          />
        </div>
        <TradingViewWidget range={dateRange} />
      </div>
    </Panel>
  );
}
