const Alpaca = require("@alpacahq/alpaca-trade-api");

export default (req, res) => {
  const {
    query: { symbol },
  } = req;

  const alpaca = new Alpaca({
    keyId: process.env.ALPACA_API_KEY_ID,
    secretKey: process.env.ALPACA_SECRET_KEY,
    paper: true,
    usePolygon: false,
  });
  const data = []
  alpaca
    .getBars("minute", symbol, {
      limit: 300,
    })
    .then((barset) => {
      const data = barset[symbol]
      const formatOpen = (arr) => {
        let x = arr.map((item) => {
          return item["openPrice"];
        });
        return x;
      };
  
      const formatHigh = (arr) => {
        let x = arr.map((item) => {
          return item["highPrice"];
        });
        return x;
      };
      const formatLow = (arr) => {
        let x = arr.map((item) => {
          return item["lowPrice"];
        });
        return x;
      };
      const formatClose = (arr) => {
        let x = arr.map((item) => {
          return item["closePrice"];
        });
        return x;
      };
  
      const formatX = (arr) => {
          let x = arr.map((item) => {
            item["startEpochTime"] = new Date(item.startEpochTime * 1000);
            return item["startEpochTime"];
          });
          return x;
        };

        const chartData = {
          x: formatX(data),
          close: formatClose(data),
          high: formatHigh(data),
          low: formatLow(data),
          open: formatOpen(data)
        }
        res.send(chartData)
    });
  
};
