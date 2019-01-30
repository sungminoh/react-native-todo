import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Container from '../components/Container';
import moment from 'moment';
import { Toolbar, Card, ListItem, withTheme } from 'react-native-material-ui'
// import Container from '../components/Container'

export default class TaskDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Task Detail',
  };

  render() {
    return (
      <Container>
        <View></View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
});
