import counterActionTypes from "../actionTypes/counterActionTypes";

export const increment = () => ({
  type: counterActionTypes.INCREMENT,
});
export const decrement = () => ({ type: counterActionTypes.DECREMENT });
