import * as types from "../types";

export const fetchcurrentprice = (symbol) => async (dispatch) => {
  const res = await fetch(
    `http://localhost:3000/api/alpacaCurrentPrice/${symbol}`
  );
  const data = await res.json();
  dispatch({
    type: types.GET_CURRENT_PRICE,
    payload: data,
  });
};
