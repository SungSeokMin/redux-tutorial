// 액션 타입 정의

import axios from 'axios';

// 깃헙 API를 시작하는 것을 의미
const GET_USERS_START = 'redux-start/users/GET_USERS_START';

// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';

// 깃헙 API 호출에 대한 응답이 실패한 경우
const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL';

// 액션 생성 함수

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

// 초기값
const initialState = {
  loading: false,
  data: [],
  error: null,
};

// 리듀서
export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// Thunk
export const getUsersThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (error) {
      dispatch(getUsersFail(error));
    }
  };
};
