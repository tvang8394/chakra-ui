import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { useState, useEffect } from "react";

function ChartJS({ alpacaPrice }) {
  
  const [width, setWidth] = useState(0); // default width, detect on server.
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

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
    height: 550,
    dragmode: "zoom",
    margin: {
      r: 60,
      t: 25,
      b: 40,
      l: 10,
    },
    showlegend: false,
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
      <Plot data={[trace]} layout={layout} config={{ displayModeBar: false }} />
    </div>
  );
}

export default ChartJS;
