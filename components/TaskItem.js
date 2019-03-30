import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, TouchableHighlight, PanResponder, Dimensions, View, Animated } from 'react-native';
import { Image } from 'react-native-elements';
import { numDaysBetween, formatDate } from '../utils/dateUtils';
import { swipeLeft, markDone, deleteTask } from '../actions/taskItemActions';
import { Avatar, Card, withTheme } from 'react-native-material-ui';
import ListItem from './ListItem';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Container from '../components/Container';
import MovableView from '../components/MovableView';
import Swipeout from 'react-native-swipeout';
import Swipeable from 'react-native-swipeable';

// const SCREEN_WIDTH = Dimensions.get('window').width;
const doneThreshold= 100;
const deleteThreshold = 200;

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: 'white' };
  }

  onSwipeLeftRelease(x, y) {
    console.log(`${this.props.id} swiped`);
    const dx = Math.abs(x);
    const { id, } = this.props;
    if (dx > deleteThreshold) {
      this.props.onDelete(id);
    } else if (dx > doneThreshold) {
      this.props.onMarkDone(id);
    }
  }

  onSwipeLeftMove(x, y) {
    const dx = Math.abs(x);
    const backgroundColor = dx > deleteThreshold ? 'red' : dx > doneThreshold ? 'green' : this.state.backgroundcolor;
    this.setState({ ...this.state, backgroundColor });
  }

  openDetailPage() {
    const {id} = this.props;
  }

  render() {
    const {
      id,
      imgUri,
      title,
      content,
      alertAt,
      // backgroundColor
    } = this.props;
    const {
      backgroundColor
    } = this.state;
    // console.log('render ', id);
    var thumbnail = imgUri ? <Image style={styles.img} source={{uri: imgUri}} /> : null;
    var timer = <Text style={styles.timer}>{formatDate(alertAt)}</Text>;
    // const leftContent = <TouchableHighlight style={{backgroundColor: 'green'}}><Text>Archive</Text></TouchableHighlight>;

    // const rightButtons = [
    //   <TouchableHighlight><Text>Button 1</Text></TouchableHighlight>,
    //   <TouchableHighlight><Text>Button 2</Text></TouchableHighlight>
    // ];

    return (
      <Container>
        {/* <Swipeable leftContent={leftContent} rightButtons={rightButtons}> */}
        <MovableView x xDirection={'negative'}
          onReleaseBack onRelease={this.onSwipeLeftRelease.bind(this)}
          onMove={this.onSwipeLeftMove.bind(this)}>
          <ListItem
            divider
            leftElement={thumbnail}
            centerElement={{
              primaryText: title,
              secondaryText: content,
            }}
            rightElement={timer}
            // onPress={_ => console.log(`${id} clicked`)}
            onPress={this.openDetailPage.bind(this)}
            styles={{ container: { backgroundColor, minHeight: 60 } }}
          />
        </MovableView>
        {/* </Swipeable> */}
      </Container>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgUri: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  alertAt: PropTypes.instanceOf(Date),
  onDelete: PropTypes.func,
  onMarkDone: PropTypes.func,
  // onSwipeLeft: PropTypes.func,
  isLoading: PropTypes.bool,
  errorMsg: PropTypes.string,
  styles: PropTypes.object,
  swipeLeft: PropTypes.func,
  markDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const {
    tasks,
    isLoading,
    errorMsg,
    backgroundColor,
  } = state.taskItemReducer;
  return {
    tasks,
    isLoading,
    errorMsg,
    backgroundColor
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return { swipeLeft: params => dispatch(swipeLeft(ownProps.namespace, params))};
// };

const mapDispatchToProps = { swipeLeft, markDone, deleteTask };

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentTitle: {
  },
  content: {
  },
  timerContainer: {
  },
  timer: {
  },
  overdue: {
  }
});
