// 액션 타입 정의
const ADD_TODO = 'redux-start/todos/ADD_TODO';
const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO';

// 액션 생성 함수
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

// 초기값
const initialState = [];

// 리듀서
export default function reducer(previosState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...previosState, { text: action.text, isDone: false }];

    case COMPLETE_TODO:
      return [
        previosState.map((todo, index) => {
          if (index === action.index) return { ...todo, isDone: true };
          return todo;
        }),
      ];

    default:
      return previosState;
  }
}
