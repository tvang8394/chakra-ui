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

  const lastTrade = alpaca.lastTrade(symbol).then((response) => {
    let lastTrade = {};
    lastTrade.symbol = response.symbol;
    lastTrade.price = response.last.price;
    res.send(lastTrade);
  });
};
