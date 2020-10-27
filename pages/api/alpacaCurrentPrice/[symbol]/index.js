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
  const data = [];
  alpaca
    .getBars("minute", symbol, {
      limit: 300,
    })
    .then((barset) => {
      const data = barset[symbol];
      const currentPrice = data[data.length - 1];
      res.send(currentPrice[0].closePrice);
    });
};
