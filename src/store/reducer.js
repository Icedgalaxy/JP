const defaultState = {
  focused: false
};
export default (state = defaultState, action) => {
  if (action.type === "hanle_input_value") {
    return {
      focused: true
    };
  }
  if (action.type === "handle_input_blur") {
    return {
      focused: false
    };
  }
  return state;
};
