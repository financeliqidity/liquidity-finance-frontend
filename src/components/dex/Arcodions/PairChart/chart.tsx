import React from "react";
import dynamic from "next/dynamic";

import { chartOptions } from "./index.config";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const priceSymbol = (lastPriceChange) => {
  let output;
  if (lastPriceChange === "+") {
    output = <span className="text-success">&#9650;</span>; // green up triangle
  } else {
    output = <span className="text-danger">&#9660;</span>; // red down triangle
  }
  return output;
};

const showPriceChart = (priceChart) => {
  return (
    <div className="price-chart">
      <div className="price">
        <h4>
          AML/ETH &nbsp; {priceSymbol(priceChart.lastPriceChange)} &nbsp;{" "}
          {priceChart.lastPrice}
        </h4>
      </div>
      {/* <Chart
        options={chartOptions}
        series={priceChart.series}
        type="candlestick"
        width="100%"
        height="100%"
      /> */}
    </div>
  );
};

export const ChartCard = () => {
  return (
    <div className="bg-blue_grey px-6 py-4">
      {/* <img src="assets/images/trading-view.png" alt="..." /> */}
    </div>
  );
};
