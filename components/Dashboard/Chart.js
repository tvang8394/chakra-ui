import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return width;
};

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

function ChartJS({ alpacaPrice }) {
  const width = useWidth();
  const trace = {
    x: alpacaPrice["x"],
    close: alpacaPrice["close"],
    decreasing: { line: { color: "#DB4437" } },
    high: alpacaPrice["high"],
    increasing: { line: { color: "#0F9D58" } },
    line: { color: "rgba(31,119,180,1)" },
    low: alpacaPrice["low"],
    open: alpacaPrice["open"],
    type: "candlestick",
    xaxis: "x",
    yaxis: "y",
  };

  const layout = {
    width: width,
    height: 600,
    dragmode: "zoom",
    margin: {
      r: 60,
      t: 25,
      b: 40,
      l: 10,
    },
    showlegend: true,
    xaxis: {
      autorange: true,
      rangeslider: { range: [alpacaPrice["x"]] },
      title: "Date",

      type: "date",
    },
    yaxis: {
      autorange: true,
      type: "linear",
      side: "right",
    },
  };

  return (
    <div>
      <Plot data={[trace]} layout={layout} />
    </div>
  );
}

export default ChartJS;
