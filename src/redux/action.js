import {
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  SET_SERCH_FIELD,
} from "./actionType";

// returneaza un obj
export const setSearchField = text => ({
  type: SET_SERCH_FIELD,
  payload: text,
});
// thunk returneaza o functie
// this is Hight order func => funct that return func
export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }));
};
