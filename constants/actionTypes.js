import { createActionTypes } from '../utils/reduxUtils';

const commonActionTypes = ['FAIL', 'SUCCESS', 'LOADING'];

export const TaskListScreenActionTypes = createActionTypes(
  'TaskListScreen',
  [...commonActionTypes]
);

export const TaskItemActionTypes = createActionTypes(
  'TaskItem',
  [...commonActionTypes,
    'MARK_DONE']
);