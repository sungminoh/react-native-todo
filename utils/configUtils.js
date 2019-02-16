import reducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

export function configureStore(initialState) {
  return createStore(reducer, initialState, compose(
    applyMiddleware(
      thunk,
      promise,
      // createLogger({
      //   // predicate: (getState, action) => action.type == 'NO_LOG'
      // })
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}