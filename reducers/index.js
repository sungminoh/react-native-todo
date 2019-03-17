import { combineReducers } from 'redux';
import taskListScreenReducer from './taskListScreenReducer';
import taskItemReducer from './taskItemReducer';
import taskDetailScreenReducer from './taskDetailScreenReducer';

export default combineReducers({
  taskListScreenReducer,
  taskItemReducer,
  taskDetailScreenReducer,
});