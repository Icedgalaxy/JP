import { fromJS } from "immutable";
import * as actions from "./actions";

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return state.set("login", action.value);
    case actions.LOG_OUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
