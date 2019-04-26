import * as actions from "./actions";
import axios from "axios";
import { fromJS } from "immutable";

export const handleInputFocus = () => ({
  type: actions.HANDLE_INPUT_FOCUS
});
export const hanleInputBlur = () => ({
  type: actions.HANDLE_INPUT_BLUR
});
export const handleAreaEnter = () => ({
  type: actions.HANDLE_AREA_ON
});
export const handleAreaLeave = () => ({
  type: actions.HANDLE_AREA_OUT
});
// export const handleChangePage = (page, isRotate) => ({
//   type: actions.HANDLE_CHANGE_PAGE,
//   page,
//   isRotate
// });
export const handleChangePage = page => ({
  type: actions.HANDLE_CHANGE_PAGE,
  page
});


const changeList = data => ({
  type: actions.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});
export const getList = () => {
  return dispatch => {
    axios
      .get("http://localhost:5000/headerList")
      .then(res => {
        dispatch(changeList(res.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
