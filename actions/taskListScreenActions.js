import { createAction } from 'redux-actions';
import { TaskListScreenActionTypes } from '../constants/actionTypes';

export const markDone = createAction(TaskListScreenActionTypes.MARK_DONE);
export const deleteTask = createAction(TaskListScreenActionTypes.DELETE_TASK);