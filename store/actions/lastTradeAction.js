import * as types from "../types";

export const fetchlasttrade = (symbol) => async (dispatch) => {
  const res = await fetch(
    `http://localhost:3000/api/alpacaLastTrade/${symbol}`
  );
  const data = await res.json();
  dispatch({
    type: types.GET_LAST_TRADE,
    payload: data,
  });
};

