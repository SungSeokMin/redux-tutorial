export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index,
  };
};

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export const showAll = () => {
  return {
    type: SHOW_ALL,
  };
};

export const showComplete = () => {
  return {
    type: SHOW_COMPLETE,
  };
};

// 깃헙 API를 시작하는 것을 의미
export const GET_USERS_START = 'GET_USERS_START';

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsersStart = () => {
  return {
    type: GET_USERS_START,
  };
};

export const getUsersSuccess = (data) => {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
};

export const getUsersFail = (error) => {
  return {
    type: GET_USERS_FAIL,
    error,
  };
};
