import Panel from "@/components/background/Panel";
import Tabs from "@/components/ui/Tabs";
import parseCurrency from "@/systems/parseCurrency";
import React, { useState } from "react";
import styles from "./styles.module.css";
import DetailItem from "./components/DetailItem";
import { IoIosInformationCircle } from "react-icons/io";
import HighLow from "@/components/misc/HighLow";
import Sub3Title from "@/components/ui/Sub3Title";

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
			name: "Market Cap Rank",
			value: "#" + geckoData.market_data.market_cap_rank,
		},
	];

	const rightTable = [
		{
			name: "Market Cap",
			value: parseCurrency(geckoData.market_data.market_cap.usd || "", "USD"),
		},
		{
			name: "Volume / Market Cap",
			value: parseCurrency(
				geckoData.market_data.total_volume.usd /
					geckoData.market_data.market_cap.usd || "",
				"USD",
			),
		},
		{
			name: "All-Time High",
			value: parseCurrency(geckoData.market_data.ath.usd || "", "USD"),
		},
		{
			name: "All-Time Low",
			value: parseCurrency(geckoData.market_data.atl.usd || "", "USD"),
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
						lowTitle={"Today's Low"}
						highTitle={"Today's High"}
						low={parseCurrency(geckoData.market_data.low_24h.usd || "", "USD")}
						high={parseCurrency(
							geckoData.market_data.high_24h.usd || "",
							"USD",
						)}
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
						<div>
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
