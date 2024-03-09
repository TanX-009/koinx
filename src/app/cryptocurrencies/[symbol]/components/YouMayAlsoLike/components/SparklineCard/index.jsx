import React, { useEffect, useRef, memo } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "@/components/clickables/Link";
import SymbolLogo from "@/components/misc/SymbolLogo";
import Change from "@/components/ui/Change";
import InnerHTML from "@/systems/ui/InnerHTML";

export default function SparklineCard({ coin }) {
  const value =
    Math.round(
      (coin.data.price_change_percentage_24h.usd + Number.EPSILON) * 100,
    ) / 100;

  return (
    <Link.LowContrast href={`/cryptocurrencies/${coin.id}`}>
      <div className={styles.widget}>
        <div className={styles.info}>
          <div className={styles.title}>
            <SymbolLogo link={coin.small} name={coin.name} />
            <p>{coin.symbol}</p>
            {value > 0 ? (
              <Change.High>{value}%</Change.High>
            ) : (
              <Change.Low>{value}%</Change.Low>
            )}
          </div>
          <div className={styles.price}>
            <InnerHTML>{coin.data.price}</InnerHTML>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src={coin.data.sparkline} alt={coin.symbol} fill />
        </div>
      </div>
    </Link.LowContrast>
  );
}
