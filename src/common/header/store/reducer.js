import * as actions from "./actions";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseOn: false,
  // isRotate: false,
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.HANDLE_INPUT_FOCUS:
      return state.set("focused", true);
    case actions.HANDLE_INPUT_BLUR:
      return state.set("focused", false);
    case actions.HANDLE_AREA_ON:
      return state.set("mouseOn", true);
    case actions.HANDLE_AREA_OUT:
      return state.set("mouseOn", false);
    case actions.HANDLE_CHANGE_PAGE:
      return state.set("page", action.page);
    // return state.merge({
    //   page: action.page,
    //   isRotate: !action.isRotate
    // });
    case actions.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      });
    default:
      return state;
  }
};
