import counterActionTypes from "../actionTypes/counterActionTypes";

const INITIAL_STATE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case counterActionTypes.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};
export default counterReducer;
