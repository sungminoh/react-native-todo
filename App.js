import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigations/AppNavigator';
import Container from './components/Container'
import TaskDetail from './components/TaskDetail'
import reducer from './reducers'

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          {/* <TaskDetail/> */}
          <AppNavigator />
        </Container>
      </Provider>
    );
  }
}
