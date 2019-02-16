import { createAction } from 'redux-actions';
import { TaskItemActionTypes } from '../constants/actionTypes';

export const markDone = createAction(TaskItemActionTypes.MARK_DONE);
export const deleteTask = createAction(TaskItemActionTypes.DELETE_TASK);
export const swipeLeft = createAction(TaskItemActionTypes.SWIPE_LEFT);