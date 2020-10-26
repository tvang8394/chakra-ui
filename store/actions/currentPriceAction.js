import * as types from "../types";

export const fetchcurrentprice = (price) => async (dispatch) => {
  dispatch({
    type: types.GET_CURRENT_PRICE,
    payload: price,
  });
};
