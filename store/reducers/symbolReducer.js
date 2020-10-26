import * as types from "../types";

const initialState = {
  symbol: "SPY",
};

export const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SYMBOL:
      return {
        ...state,
        symbol: action.payload,
      };
    default:
      return state;
  }
};
