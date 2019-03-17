import { handleActions } from 'redux-actions';
import { TaskDetailScreenActionTypes } from '../constants/actionTypes';
import { lastId } from '../utils/storageUtils';

const initialState = {
  id: lastId + 1,
  isLoading: false,
  errorMsg: '',
  alertAt: new Date(),
};

export default handleActions({
  // var a = handleActions({
  [TaskDetailScreenActionTypes.SET_TIME]: (state, action) => {
    const alertAt = action.payload;
    return {
      ...state,
      alertAt,
    };
  },
  [TaskDetailScreenActionTypes.SAVE]: (state, action) => {
    return {
      ...state,
    };
  },
  [TaskDetailScreenActionTypes.FAIL]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: action.payload,
    };
  },
  [TaskDetailScreenActionTypes.SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMsg: '',
    };
  },
  [TaskDetailScreenActionTypes.LOADING]: (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  }
}, initialState);