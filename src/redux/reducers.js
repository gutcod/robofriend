import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  SET_SERCH_FIELD,
} from "./actionType";

const INITIAL_STATE_SEARCH = {
  searchField: "",
  isPending: false,
  robots: [],
};
// serhc robots
export const searchReducer = (state = INITIAL_STATE_SEARCH, action) => {
  switch (action.type) {
    case SET_SERCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    default:
      return state;
  }
};
// request robots
const INITIAL_STATE_REQUEST = {
  isPending: false,
  robots: [],
  err: "",
};
export const requestRobotsReducer = (state = INITIAL_STATE_REQUEST, action) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        robots: action.payload,
        isPending: false,
      };
    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        err: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};
