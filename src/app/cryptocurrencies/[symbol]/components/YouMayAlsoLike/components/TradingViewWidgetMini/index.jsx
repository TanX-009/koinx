import React, { useEffect, useRef, memo } from "react";
import styles from "./styles.module.css";

function TradingViewWidgetMini({ symbol }) {
  const container = useRef();
  console.log(symbol);

  const params = `{
  "symbol": "${symbol}",
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "dateRange": "1D",
  "colorTheme": "light",
  "isTransparent": false,
  "autosize": true,
  "largeChartUrl": "",
  "chartOnly": false,
  "noTimeScale": true
}`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = params;
    container.current.innerHTML = "";
    container.current.appendChild(script);
  }, [params]);

  return <div className={styles.widget} ref={container}></div>;
}

export default memo(TradingViewWidgetMini);
