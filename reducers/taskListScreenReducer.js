/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import { TaskItemActionTypes } from '../constants/actionTypes';
import { examples } from '../utils/storageUtils';

const initialState = {
  tasks: examples,
  isLoading: false,
  errorMsg: '',
};

export default handleActions({
  [TaskItemActionTypes.FAIL]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: action.payload,
    };
  },
  [TaskItemActionTypes.SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: '',
    };
  },
  [TaskItemActionTypes.LOADING]: (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }
}, initialState);
