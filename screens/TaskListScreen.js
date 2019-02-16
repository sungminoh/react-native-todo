import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';
import Container from '../components/Container';
import { Subheader } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { SubspaceProvider } from 'react-redux-subspace';
import { namespaced } from 'redux-subspace';

class TaskListScreen extends React.Component {
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

  onDelete(id){
    console.log('delete: ' + id);
  }
  onMarkDone(id){
    console.log('mark done : ' + id);
  }

  render() {
    const {
      tasks,
    } = this.props;
    let sections = [
      {title: 'section1', data: tasks}
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
                onDelete={this.onDelete.bind(this)}
                onMarkDone={this.onMarkDone.bind(this)}
              />
            )
          }
          renderSectionHeader={({section: {title}}) => (
            <Subheader
              style={subheaderStyle}
              text={title}/>
          )}
          sections={sections}
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

TaskListScreen.propTypes = {
  tasks: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  errorMsg: PropTypes.string,
};

export default connect(
  (state) => {
    const {
      tasks,
      isLoading,
      errorMsg,
    } = state.taskListScreenReducer;
    return {
      tasks,
      isLoading,
      errorMsg,
    };
  }
  // ,
  // (dispatch) => ({
  //   CounterActions: bindActionCreators(counterActions, dispatch),
  //   PostActions: bindActionCreators(postActions, dispatch)
  // })
)(TaskListScreen);