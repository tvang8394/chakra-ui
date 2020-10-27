import dynamic from "next/dynamic";
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/core";

function ChartJS() {
  const { symbol } = useSelector((state) => state.symbol);

  
  const [width, setWidth] = useState(0); // default width, detect on server.
  const [alpacaPrice, setAlpacaPrice] = useState([]);
  const handleResize = () => setWidth(window.innerWidth);
  
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    const getPrice = async () => {
      const res = await fetch(
        `http://localhost:3000/api/alpacaPriceHistory/${symbol}`
      );
      const data = await res.json();

      setAlpacaPrice(data);
    };
    getPrice();
  }, [symbol]);
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
    height: 500,
    dragmode: "zoom",
    margin: {
      r: 40,
      t: 25,
      b: 40,
      l: 10,
    },
    showlegend: false,
    xaxis: {
      autorange: true,
      rangeslider: { range: [alpacaPrice["x"]] },

      type: "date",
    },
    yaxis: {
      autorange: true,
      type: "linear",
      side: "right",
    },
  };

  return (
    <Box bg="#5D6D7E">
      <Plot data={[trace]} layout={layout} config={{ displayModeBar: false }} />
    </Box>
  );
}

export default ChartJS;
