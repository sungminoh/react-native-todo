import { TaskItemActionTypes } from '../constants/actionTypes';
import { createReducer } from '../utils/reduxUtils';

export default createReducer(state = {
    isLoading: false,
    errorMsg: '',
}, {
    [TaskItemActionTypes.FAIL]: (state, action) => {
        console.log(state);
        console.log(action);
        return {
            ...state,
            isLoading: false,
            errorMsg: action.payload,
        };
    }
});