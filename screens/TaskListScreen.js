import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';
import Container from '../components/Container';
import { Subheader } from 'react-native-material-ui';

export default class TaskListScreen extends React.Component {
  static navigationOptions = {
    title: 'Tasks',
  };

  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;
  //   return {
  //     title: params ? params.otherParam : 'A Nested Details Screen',
  //     /* These values are used instead of the shared configuration! */
  //     // headerStyle: {
  //     //   backgroundColor: navigationOptions.headerTintColor,
  //     // },
  //     // headerTintColor: navigationOptions.headerStyle.backgroundColor,
  //   };
  // };

  render() {
    // TODO
    let tasks = [
      {title: 'section1', data: [
        {imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date()},
        {title: 'title2', content: 'content2', alertAt: new Date()},
        {imgUri: 'imguri', title: 'title', content: 'content'},
        {imgUri: 'imguri', title: 'title', content: 'content'},
      ]},
      {title: 'section2', data: [
        {imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date()},
        {title: 'title2', content: 'content2', alertAt: new Date()},
        {imgUri: 'imguri', title: 'title', content: 'content'},
        {imgUri: 'imguri', title: 'title', content: 'content'},
      ]}
    ];

    return (
      <Container>
        <SectionList
          renderItem={
            ({item: {imgUri, title, content, alertAt},
              index,
              section}) => <TaskItem key={index}
                imgUri={imgUri}
                title={title}
                content={content}
                alertAt={alertAt}/>
          }
          renderSectionHeader={({section: {title}}) => (
            <Subheader
              style={subheaderStyle}
              text={title}/>
          )}
          sections={tasks}
          keyExtractor={(item, index) => index}
        />
      </Container>
    );
  }
}

const subheaderStyle = StyleSheet.create({
  container: {
  },
  text: {
    fontWeight: 'bold'
  }
});
