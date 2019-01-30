import React from 'react';
import { Text, Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TaskListScreen from '../screens/TaskListScreen';
import CardScreen from '../screens/CardScreen';

const HomeStack = createStackNavigator({
  Home: TaskListScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  title: 'title',
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

const TestStack = createStackNavigator({
  Test: CardScreen,
});

TestStack.navigationOptions = {
  tabBarLabel: 'Test',
  title: 'title',
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
  HomeStack,
  TestStack
});