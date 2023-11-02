import { ActionTypes } from "../constants/Action-type";

const intialState = {
  products: [],
};

export const prodctReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    // case ActionTypes.SET_PRODUCTS:
    //   return {
    //     ...state,
    //     products: payload,
    //   };
    case ActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export const selectedProdctReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
