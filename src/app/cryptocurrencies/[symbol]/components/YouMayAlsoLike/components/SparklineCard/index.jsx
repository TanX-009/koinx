import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "@/components/clickables/Link";
import SymbolLogo from "@/components/misc/SymbolLogo";
import Change from "@/components/ui/Change";
import InnerHTML from "@/systems/ui/InnerHTML";
import parseCurrency from "@/systems/parseCurrency";

export default function SparklineCard({ coin }) {
  const value =
    Math.round(
      (coin.data.price_change_percentage_24h.usd + Number.EPSILON) * 100,
    ) / 100;

  console.log(coin);

  return (
    <Link.LowContrast href={`/cryptocurrencies/${coin.id}`}>
      <div className={styles.widget}>
        <div className={styles.info}>
          <div className={styles.title}>
            <SymbolLogo link={coin.small} name={coin.name} />
            <p>{coin.symbol}</p>
            <Change value={value} postfix="%" prefix={false} />
          </div>
          <div className={styles.price}>
            <p>{parseCurrency(coin.data.price, "USD")}</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={coin.data.sparkline}
            alt={coin.symbol}
            fill
            sizes="(max-width: 30em) 70vw, (max-width: 80em) 40vw, (max-width: 120em) 20vw, 8vw"
          />
        </div>
      </div>
    </Link.LowContrast>
  );
}
