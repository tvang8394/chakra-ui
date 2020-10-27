import * as types from "../types";

const initialState = {
  lastTrade: [],
};

export const lastTradeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LAST_TRADE:
      return {
        ...state,
        lastTrade: [action.payload, ...state.lastTrade],
      };
    default:
      return state;
  }
};
