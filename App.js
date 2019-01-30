import React from 'react';
import AppNavigator from './navigations/AppNavigator';
import Container from './components/Container'
import TaskDetail from './components/TaskDetail'


export default class App extends React.Component {
  render() {
    return (
      <Container>
        {/* <TaskDetail/> */}
        <AppNavigator />
      </Container>
    );
  }
}