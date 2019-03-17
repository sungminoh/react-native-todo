/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import { TaskItemActionTypes } from '../constants/actionTypes';
import { white } from 'ansi-colors';
import { examples } from '../utils/storageUtils';
import { createStore, combineReducers } from 'redux';

const initialState = {
  isLoading: false,
  errorMsg: '',
  instanceProps: {},
};


// var createReducer = key => handleActions({
export default handleActions({
  // var a = handleActions({
  [TaskItemActionTypes.MARK_DONE]: (state, action) => {
    console.log('reduce action ', TaskItemActionTypes.MARK_DONE.toString());
    const id = action.payload;
    return {
      ...state,
    };
  },
  [TaskItemActionTypes.DELETE_TASK]: (state, action) => {
    console.log('reduce action ', TaskItemActionTypes.DELETE_TASK.toString());
    const id = action.payload;
    return {
      ...state,
    };
  },
  [TaskItemActionTypes.SWIPE_LEFT]: (state, action) => {
    console.log('reduce action: ', TaskItemActionTypes.SWIPE_LEFT.toString());
    const { id, dx } = action.payload;
    // const backgroundColor = dx > 200 ? 'red' : dx > 100 ? 'green' : state.backgroundcolor;
    return {
      ...state,
      // backgroundColor
    };
  },

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


// export default combineReducers(
//   examples.reduce((acc, x, i) => {
//     acc[x.id] = createReducer();
//     return acc;
//   }, {})
// );