import React, { useEffect, useRef, memo } from "react";
import styles from "./styles.module.css";

function TradingViewWidget({ symbol, range }) {
  const container = useRef();

  let parsedRange = range;
  switch (range) {
    case "1Y":
      parsedRange = "12M";
      break;
    case "5Y":
      parsedRange = "60M";
      break;
    default:
      parsedRange = range;
      break;
  }

  const params = `{
    "autosize": true,
    "symbol": "${symbol.toUpperCase()}",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "3",
    "locale": "en",
    "enable_publishing": false,
    "hide_top_toolbar": true,
    "hide_legend": true,
    "range": "${parsedRange}",
    "save_image": false,
    "calendar": false,
    "hide_volume": true,
    "support_host": "https://www.tradingview.com"
  }`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = params;
    container.current.innerHTML = "";
    container.current.appendChild(script);
  }, [params]);

  return <div className={styles.widget} ref={container}></div>;
}

export default memo(TradingViewWidget);
