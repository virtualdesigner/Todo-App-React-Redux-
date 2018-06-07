const changeInputValue = (state = { inputValue: "" }, action) => {
  switch (action.type) {
    case "changeInputValue":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

export default changeInputValue;
