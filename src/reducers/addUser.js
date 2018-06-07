/* REDUCERS */
// Initial state for the reducer

// Defining Reducer
const addUser = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      if (state.indexOf(action.payload) !== -1 || action.payload === "") {
        return state;
      }
      return [...state, action.payload];
    case "deleteUser":
      return [
        ...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1)
      ];
    default:
      return state;
  }
};

export default addUser;
