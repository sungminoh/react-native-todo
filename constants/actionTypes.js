import { createActionTypes } from '../utils/reduxUtils';

const commonActionTypes = ['FAIL', 'SUCCESS', 'LOADING'];

export const TaskListScreenActionTypes = createActionTypes(
  'TaskListScreen',
  [...commonActionTypes,
    'MARK_DONE', 'DELETE_TASK']
);

export const TaskItemActionTypes = createActionTypes(
  'TaskItem',
  [...commonActionTypes,
    'MARK_DONE', 'DELETE_TASK', 'SWIPE_LEFT']
);

export const TaskDetailScreenActionTypes = createActionTypes(
  'TaskDetailScreen',
  [...commonActionTypes,
    'SET_TIME', 'SAVE']
);
