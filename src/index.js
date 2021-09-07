import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { addTodo, completeTodo, showAll, showComplete } from './redux/action';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('coding'));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());
store.dispatch(showAll());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
