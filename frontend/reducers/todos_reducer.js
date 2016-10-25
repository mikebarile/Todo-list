import merge from 'lodash/merge';
import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/todo_actions';

const ToDosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach(todo => { newState[todo.id] = todo; });
      return newState;
    default:
      return state;
  }
};

export default ToDosReducer;
