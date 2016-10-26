import merge from 'lodash/merge';
import { REQUEST_TODOS, RECEIVE_TODOS, RECEIVE_TODO }
  from '../actions/todo_actions';

const ToDosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => { newState[todo.id] = todo; });
      return newState;
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default ToDosReducer;
