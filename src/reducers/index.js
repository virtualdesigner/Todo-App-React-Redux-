import { combineReducers } from "redux";
import addUser from "./addUser";
import changeInputValue from "./changeInputValue";

const reducers = combineReducers({
  addUser,
  changeInputValue
});

export default reducers;
