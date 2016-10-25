import ToDosReducer from './todos_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: ToDosReducer
});

export default rootReducer;
