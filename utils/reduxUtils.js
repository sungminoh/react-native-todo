export function createActionTypes(name, types){
  return types.reduce((acc, type) => {
    acc[type] = name + '/' + type;
    return acc;
  }, {});
}

// export function createReducer(initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     if (handlers.hasOwnProperty(action.type)) {
//       return handlers[action.type](state, action);
//     } else {
//       return state;
//     }
//   };
// }