import { fromJS } from "immutable";
import * as actions from "./actions";

const defaultState = fromJS({
  title: null,
  content: null
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};
