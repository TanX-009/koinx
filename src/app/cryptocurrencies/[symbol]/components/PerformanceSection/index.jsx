import Panel from "@/components/background/Panel";
import Tabs from "@/components/ui/Tabs";
import parseCurrency from "@/systems/parseCurrency";
import React, { useState } from "react";
import styles from "./styles.module.css";
import DetailItem from "./components/DetailItem";
import { IoIosInformationCircle } from "react-icons/io";
import HighLow from "@/components/misc/HighLow";
import Sub3Title from "@/components/ui/Sub3Title";
import round from "@/systems/math/round";
import Change from "@/components/ui/Change";
import isoToNormal from "@/systems/isoToNormal";
import calculateAge from "@/systems/calculateAge";

export default function PerformanceSection({ geckoData }) {
  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  const [currentTab, setCurrentTab] = useState("Overview");

  const leftTable = [
    {
      name: (geckoData.name || "") + " Price",
      value: parseCurrency(
        geckoData.market_data.current_price.usd || "",
        "USD",
      ),
    },
    {
      name: "24h Low / 24h High",
      value: `${parseCurrency(
        geckoData.market_data.low_24h.usd || "",
        "USD",
      )} / ${parseCurrency(geckoData.market_data.high_24h.usd || "", "USD")}`,
    },
    {
      name: "Trading Volume",
      value: parseCurrency(geckoData.market_data.total_volume.usd || "", "USD"),
    },
    {
      name: "All-Time Low",
      value: (
        <div>
          <div className={styles.allTime}>
            {parseCurrency(geckoData.market_data.atl.usd || "", "USD")}
            <Change
              value={round(geckoData.market_data.atl_change_percentage.usd)}
              postfix={"%"}
              prefix={false}
              type="foreground"
            />
          </div>
          <div>
            {isoToNormal(geckoData.market_data.atl_date.usd).date}
            {calculateAge(geckoData.market_data.atl_date.usd)
              ? ` (${calculateAge(geckoData.market_data.atl_date.usd)})`
              : ""}
          </div>
        </div>
      ),
    },
  ];

  const rightTable = [
    {
      name: "Market Cap Rank",
      value: "#" + geckoData.market_data.market_cap_rank,
    },
    {
      name: "Market Cap",
      value: parseCurrency(geckoData.market_data.market_cap.usd || "", "USD"),
    },
    {
      name: "Volume / Market Cap",
      value: round(
        geckoData.market_data.total_volume.usd /
          geckoData.market_data.market_cap.usd || "",
        4,
      ),
    },
    {
      name: "All-Time High",
      value: (
        <div>
          <div className={styles.allTime}>
            {parseCurrency(geckoData.market_data.ath.usd || "", "USD")}
            <Change
              value={round(geckoData.market_data.ath_change_percentage.usd)}
              postfix={"%"}
              prefix={false}
              type="foreground"
            />
          </div>
          <div>
            {isoToNormal(geckoData.market_data.ath_date.usd).date}
            {calculateAge(geckoData.market_data.ath_date.usd)
              ? ` (${calculateAge(geckoData.market_data.ath_date.usd)})`
              : ""}
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className={styles.tabsContainer}>
        <Tabs.Underline
          current={currentTab}
          setter={setCurrentTab}
          tabs={tabs}
        />
      </div>
      {currentTab === "Overview" ? (
        <Panel>
          <h3>{currentTab}</h3>

          <HighLow
            lowTitle={"Today's Low"}
            highTitle={"Today's High"}
            low={parseCurrency(geckoData.market_data.low_24h.usd || "", "USD")}
            high={parseCurrency(
              geckoData.market_data.high_24h.usd || "",
              "USD",
            )}
            lowRaw={geckoData.market_data.low_24h.usd || 0}
            highRaw={geckoData.market_data.high_24h.usd || 0}
            current={parseCurrency(
              geckoData.market_data.current_price.usd || "",
              "USD",
            )}
            currentRaw={geckoData.market_data.current_price.usd || ""}
          />

          <HighLow
            lowTitle={"All-Time Low"}
            highTitle={"All-Time High"}
            low={parseCurrency(geckoData.market_data.atl.usd || "", "USD")}
            high={parseCurrency(geckoData.market_data.ath.usd || "", "USD")}
          />

          <Sub3Title>
            Fundamentals <IoIosInformationCircle />
          </Sub3Title>
          <div className={styles.fundamentals}>
            <div>
              {leftTable.map((item, index) => {
                return <DetailItem key={index} {...item} />;
              })}
            </div>
            <div className={styles.reverseOnMobile}>
              {rightTable.map((item, index) => {
                return <DetailItem key={index} {...item} />;
              })}
            </div>
          </div>
        </Panel>
      ) : (
        <Panel>
          <h3>{currentTab}</h3>
        </Panel>
      )}
    </>
  );
}
