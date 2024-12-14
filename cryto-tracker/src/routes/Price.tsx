import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchPriceChart } from "../api";
import ApexCharts from "react-apexcharts";

interface ICoinId {
  coinId: string;
}

interface IData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price() {
  const { coinId } = useOutletContext<ICoinId>();
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinId], () =>
    fetchPriceChart(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Charts..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              data: data?.map((price) => ({
                x: new Date(Number(price.time_close) * 1000)
                  .toISOString()
                  .split("T")[0],
                y: [price.open, price.high, price.low, price.close],
              })) as any,
            },
          ]}
          options={{
            theme: { mode: "dark" },
            chart: {
              type: "candlestick",
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: data?.map(
                (price) =>
                  new Date(Number(price.time_close) * 1000)
                    .toISOString()
                    .split("T")[0]
              ),
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#e74c3c",
                  downward: "#3498db",
                },
              },
            },
          }}
        ></ApexCharts>
      )}
    </div>
  );
}

export default Price;
