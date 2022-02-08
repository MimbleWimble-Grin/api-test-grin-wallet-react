import { GETDATA } from "../types";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case GETDATA:
      return {...state, ...action.payload};
    default:
      return state;
  }
};
