import React from 'react'
import { View } from 'react-native'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { namespaced } from 'redux-subspace'
import { SubspaceProvider } from 'react-redux-subspace'
import TaskItem from '../components/TaskItem'
import taskItemReducer from '../reducers/taskItemReducer';

const rootReducer = combineReducers({
  task1: namespaced('t1')(taskItemReducer),
  task2: namespaced('t2')(taskItemReducer)
});

class Test extends React.Component {
  render() {
    return (
      <View>
        <SubspaceProvider store={rootReducer} mapState={(state) => state.task1}>
          <TaskItem key={1} id={1}
            title={"123"}
            content={"123"}
            alertAt={0}
          />
        </SubspaceProvider>
        <SubspaceProvider store={rootReducer} mapState={(state) => state.task2}>
          <TaskItem key={2} id={2}
            title={"abc"}
            content={"abc"}
            alertAt={0}
          />
        </SubspaceProvider>
      </View>
    );
  }
}

export default Test;