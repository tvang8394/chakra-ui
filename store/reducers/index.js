import { combineReducers } from "redux";
import { symbolReducer } from "./symbolReducer";
import { currentPriceReducer } from "./currentPriceReducer";
import { lastTradeReducer } from "./lastTradeReducer";

export default combineReducers({
  symbol: symbolReducer,
  currentPrice: currentPriceReducer,
  lastTrade: lastTradeReducer,
});
