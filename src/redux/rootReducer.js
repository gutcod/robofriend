import { combineReducers } from "redux";
import { requestRobotsReducer, searchReducer } from "./reducers";

export default combineReducers({
  search: searchReducer,
  requestRobotsReducer: requestRobotsReducer,
});
