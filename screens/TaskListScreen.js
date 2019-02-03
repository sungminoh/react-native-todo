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

  //onSwipe(gestureName, gestureState) {
    //const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    //console.log(gestureName, gestureState)
    //this.setState({gestureName: gestureName});
    //switch (gestureName) {
      //case SWIPE_UP:
        //this.setState({backgroundColor: 'red'});
        //break;
      //case SWIPE_DOWN:
        //this.setState({backgroundColor: 'green'});
        //break;
      //case SWIPE_LEFT:
        //this.setState({backgroundColor: 'blue'});
        //break;
      //case SWIPE_RIGHT:
        //this.setState({backgroundColor: 'yellow'});
        //break;
    //}
  //}

  //onSwipeLeftCard(gestureState) {
    //console.log(gestureState);
  //}

  render() {
    // TODO
    let tasks = [
      {title: 'section1', data: [
        {id: 1, imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date()},
        {id: 2, title: 'title2', content: 'content2', alertAt: new Date()},
        {id: 3, imgUri: 'imguri', title: 'title', content: 'content'},
        {id: 4, imgUri: 'imguri', title: 'title', content: 'content'},
      ]},
      {title: 'section2', data: [
        {id: 5, imgUri: 'imguri', title: 'title', content: 'content', alertAt: new Date()},
        {id: 6, title: 'title2', content: 'content2', alertAt: new Date()},
        {id: 7, imgUri: 'imguri', title: 'title', content: 'content'},
        {id: 8, imgUri: 'imguri', title: 'title', content: 'content'},
      ]}
    ];

    return (
      <Container>
        <SectionList
          renderItem={
            ({item: {id, imgUri, title, content, alertAt}, index, section}) => (
              <TaskItem key={id} id={id}
                imgUri={imgUri}
                title={title}
                content={content}
                alertAt={alertAt}
              />
            )
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
