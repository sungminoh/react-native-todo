import { combineReducers } from 'redux';
import taskListScreenReducer from './taskListScreenReducer';
import taskItemReducer from './taskItemReducer';

export default combineReducers({
  taskListScreenReducer,
  taskItemReducer,
});