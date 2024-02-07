// src/redux/reducers/todosReducer.js
import { FETCH_TODOS_SUCCESS } from '../actions';

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
