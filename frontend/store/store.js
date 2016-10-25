import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const preloadedState = {
  todos: {}
};

const configureStore = (state = preloadedState) => (
  createStore(
    RootReducer,
    state,
    MasterMiddleware
  )
);

export default configureStore;
