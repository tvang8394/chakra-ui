import * as types from "../types";

export const fetchsymbol = (symbol) => async (dispatch) => {
  dispatch({
    type: types.GET_SYMBOL,
    payload: symbol,
  });
};
