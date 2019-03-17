/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import { TaskListScreenActionTypes } from '../constants/actionTypes';
import { examples } from '../utils/storageUtils';

const initialState = {
  tasks: examples,
  isLoading: false,
  errorMsg: '',
};

export default handleActions({
  [TaskListScreenActionTypes.MARK_DONE]: (state, action) => {
    console.log('reduce action ', TaskListScreenActionTypes.MARK_DONE.toString());
    const id = action.payload;
    return {
      ...state,
      tasks: state.tasks.filter(x => x.id != id)
    };
  },
  [TaskListScreenActionTypes.DELETE_TASK]: (state, action) => {
    console.log('reduce action ', TaskListScreenActionTypes.DELETE_TASK.toString());
    const id = action.payload;
    return {
      ...state,
      tasks: state.tasks.filter(x => x.id != id)
    };
  },
  [TaskListScreenActionTypes.FAIL]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: action.payload,
    };
  },
  [TaskListScreenActionTypes.SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: '',
    };
  },
  [TaskListScreenActionTypes.LOADING]: (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }
}, initialState);
