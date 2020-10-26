import * as types from "../types";

const initialState = {
  currentPrice: "",
};

export const currentPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SYMBOL:
      return {
        ...state,
        currentPrice: action.payload,
      };
    default:
      return state;
  }
};
