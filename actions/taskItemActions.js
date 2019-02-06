import { createAction } from 'redux-actions';
import { TaskItemActionTypes } from '../constants/actionTypes';

export const markDone = createAction(TaskItemActionTypes.MARK_DONE);