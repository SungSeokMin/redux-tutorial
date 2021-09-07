import { ADD_TODO, COMPLETE_TODO } from '../action';

const initialState = [];

export default function todos(previosState = initialState, action) {
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
