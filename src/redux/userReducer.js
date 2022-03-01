import * as actionTypes from "./actions";

const initialState = {
  loading: false,
  user: {},
  error: "",
  fflink: "",
  fflist: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQ:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SUC:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actionTypes.FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.SET_FF_LINK:
      return {
        ...state,
        fflink: action.payload,
      };
    case actionTypes.SET_FF_LIST:
      return {
        ...state,
        fflist: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
