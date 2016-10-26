import { fetchTodos, createTodo } from '../util/todo_api_util';
import { REQUEST_TODOS, RECEIVE_TODOS, CREATE_TODO, receiveTodos, receiveTodo }
  from '../actions/todo_actions';

export const TodoMiddleware = store => next => action => {
  let success;
  let error = (e) => {console.log(e);};
  switch (action.type) {
    case REQUEST_TODOS:
      success = (data) => {
        store.dispatch(receiveTodos(data));
      };

      fetchTodos(success, error);
      return next(action);
    case CREATE_TODO:
      success = (data) => {
        store.dispatch(receiveTodo(data));
      };
      createTodo(action.todo, success, error);
      return next(action);
    default:
      return next(action);
  }
};
