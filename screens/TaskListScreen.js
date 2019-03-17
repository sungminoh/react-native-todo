import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import TaskItem from '../components/TaskItem';
import Container from '../components/Container';
import { Subheader } from 'react-native-material-ui';
import { connect } from 'react-redux';
import { markDone, deleteTask } from '../actions/taskListScreenActions';

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

  onDelete(id) {
    console.log('delete: ' + id);
    this.props.deleteTask(id);
  }
  onMarkDone(id) {
    console.log('mark done : ' + id);
    this.props.markDone(id);
  }
  // onSwipeLeft(id) {
  //   console.log('swipe left: ' + id);
  // }

  render() {
    const {
      tasks,
    } = this.props;
    let sections = [
      { title: 'section1', data: tasks }
    ];
    return (
      <Container>
        <SectionList
          renderItem={
            ({ item: { id, imgUri, title, content, alertAt }, index, section }) => (
              <TaskItem key={id} id={id}
                imgUri={imgUri}
                title={title}
                content={content}
                alertAt={alertAt}
                onDelete={this.onDelete.bind(this)}
                onMarkDone={this.onMarkDone.bind(this)}
                // onSwipeLeft={this.onSwipeLeft.bind(this)}
              />
            )
          }
          renderSectionHeader={({ section: { title } }) => (
            <Subheader
              style={subheaderStyle}
              text={title} />
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
  markDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
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
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     markDone: params => dispatch(markDone(params)),
//     deleteTask: params => dispatch(deleteTask(params)),
//   };
// };
const mapDispatchToProps = { markDone, deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskListScreen);