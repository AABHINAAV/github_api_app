import axios from "axios";

import * as actionTypes from "./actions";

const fetchReq = () => {
  return { type: actionTypes.FETCH_REQ };
};

const fetchSuc = (data) => {
  return { type: actionTypes.FETCH_SUC, payload: data };
};

const fetchFail = (e) => {
  return { type: actionTypes.FETCH_FAIL, payload: e };
};

const returnFFDispatch = (link) => {
  return { type: actionTypes.SET_FF_LINK, payload: link };
};

const returnFFListDispatch = (list) => {
  return { type: actionTypes.SET_FF_LIST, payload: list };
};

export const fetchUserData = (userid) => {
  return async (dispatch) => {
    dispatch(fetchReq());

    try {
      let res = await axios.get(`https://api.github.com/users/${userid}`);
      let data = res.data;
      dispatch(fetchSuc(data));
    } catch (e) {
      dispatch(fetchFail(e));
    }
  };
};

export const setFFLink = (link) => {
  return (dispatch) => {
    dispatch(returnFFDispatch(link));
  };
};

export const fetchFFList = (link) => {
  return async (dispatch) => {
    let res = await axios.get(link);
    let data = res.data;
    dispatch(returnFFListDispatch(data));
  };
};
