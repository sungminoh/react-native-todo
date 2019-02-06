/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import { TaskItemActionTypes } from '../constants/actionTypes';

const initialTasks = [
  { id: 1, imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date() },
  { id: 2, title: 'title2', content: 'content2', alertAt: new Date() },
  { id: 3, imgUri: 'imguri', title: 'title', content: 'content' },
  { id: 4, imgUri: 'imguri', title: 'title', content: 'content' },
  { id: 5, imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date() },
  { id: 6, title: 'title2', content: 'content2', alertAt: new Date() },
  { id: 7, imgUri: 'imguri', title: 'title', content: 'content' },
  { id: 8, imgUri: 'imguri', title: 'title', content: 'content' },
];

const initialState = {
  tasks: initialTasks,
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
