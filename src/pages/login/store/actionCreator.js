import * as actions from "./actions";
import axios from "axios";
// import { fromJS } from "immutable";

const changeLogin = () => {
  return {
    type: actions.LOG_IN,
    value: true
  };
};

export const exit = () => {
  return {
    type: actions.LOG_OUT,
    value: false
  };
};

export const login = (account, password) => {
  return dispatch => {
    axios
      .get(
        "http://localhost:5000/login?account=" +
          account +
          "&password" +
          password
      )
      .then(res => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登录失败");
        }
      });
  };
};
