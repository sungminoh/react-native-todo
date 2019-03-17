import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TaskListScreen from '../screens/TaskListScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const HomeStack = createStackNavigator({
  Home: TaskListScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  title: 'home title',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const TaskDetailStack = createStackNavigator({
  TaskDetail: TaskDetailScreen,
});

TaskDetailStack.navigationOptions = {
  tabBarLabel: 'Task',
  title: 'task title',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


export default createBottomTabNavigator({
  TaskDetailStack,
  HomeStack,
});