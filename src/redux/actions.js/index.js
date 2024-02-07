// src/redux/actions/index.js
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});
