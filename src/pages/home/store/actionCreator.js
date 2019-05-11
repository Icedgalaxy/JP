import * as actions from "./actions";
import axios from "axios";
import { fromJS } from "immutable";

export const ShowScroll = () => ({
  type: actions.SHOW_SCROLL
});
export const HideScroll = () => ({
  type: actions.HIDE_SCROLL
});

const getHomeContent = data => ({
  type: actions.GET_HOME_CONTENT,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList)
});

const preGetMoreList = (data, nextPage) => ({
  type: actions.GET_MORE_LIST,
  articleList: fromJS(data),
  nextPage
});

export const getHomeAxios = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/home")
      .then(res => {
        dispatch(getHomeContent(res.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios
      .get("http://localhost:5000/homeList?page=" + page)
      .then(res => {
        dispatch(preGetMoreList(res.data.articleList, page + 1));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
