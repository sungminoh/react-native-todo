import { createActionTypes } from '../utils/reduxUtils';

const commonActionTypes = ["FAIL", "SUCCESS", "LOADING"]

export const TaskItemActionTypes = createActionTypes(
  "TaskItemActionTypes",
  [...commonActionTypes]
)