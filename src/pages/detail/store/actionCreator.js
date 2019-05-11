import axios from "axios";
import * as actions from "./actions";

const changeDetail = (title, content) => ({
  type: actions.GET_DETAIL,
  title,
  content
});

export const getDetail = id => {
  return Dispatch => {
    axios.get("http://localhost:5000/detail?id=" + id).then(res => {
      const data = res.data;
      Dispatch(changeDetail(data.title, data.content));
    });
  };
};
