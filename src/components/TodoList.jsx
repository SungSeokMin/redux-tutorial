import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, idx) => {
          return <li key={idx}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
