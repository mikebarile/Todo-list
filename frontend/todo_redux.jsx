import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestTodos } from './actions/todo_actions';
import { allTodos } from './reducers/selector';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  let store = configureStore();
  ReactDOM.render(< Root store={store}/>, content);
  window.store = store;
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
});
