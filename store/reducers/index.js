import { combineReducers } from "redux";
import { symbolReducer } from "./symbolReducer";
import { currentPriceReducer } from "./currentPriceReducer";

export default combineReducers({
  symbol: symbolReducer,
  currentPrice: currentPriceReducer,
});
