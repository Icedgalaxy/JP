import { fromJS } from "immutable";
import * as actions from "./actions";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  page: 1,
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.SHOW_SCROLL:
      return state.set("showScroll", true);
    case actions.HIDE_SCROLL:
      return state.set("showScroll", false);
    case actions.GET_HOME_CONTENT:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList
      });
    case actions.GET_MORE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.articleList),
        page: action.nextPage
      });
    default:
      return state;
  }
};
