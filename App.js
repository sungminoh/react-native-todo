import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigations/AppNavigator';
import Container from './components/Container';
import { configureStore } from './utils/configUtils.js';

const store = configureStore();

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
