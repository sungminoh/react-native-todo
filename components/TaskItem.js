import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, PanResponder, Dimensions, View, Animated } from 'react-native';
import moment from 'moment';
import { numDaysBetween } from '../utils/dateUtils';
import { swipeLeft, markDone, deleteTask } from '../actions/taskItemActions';
import { Avatar, Card, withTheme } from 'react-native-material-ui';
import ListItem from './ListItem';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Container from '../components/Container';
import MovableView from '../components/MovableView';
import Swipeout from 'react-native-swipeout';

// const SCREEN_WIDTH = Dimensions.get('window').width;

class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    // this.panResponder = this._createPanResponder();
    // this.position = new Animated.ValueXY();
    this.state = { backgroundColor: 'white' };
  }

  // _createPanResponder() {
  //   return PanResponder.create({
  //     onStartShouldSetPanResponder: (ent, gestureState) => true,
  //     onPanResponderMove: (evt, gestureState) => {
  //       this.position.setValue({
  //         x: gestureState.dx,
  //         y: 0,
  //         // y: gestureState.dy
  //       });
  //     },
  //     onPanResponderRelease: (evt, gestureState) => { }
  //   });
  // }


  _formatDate(date) {
    const now = new Date();
    const datemoment = moment(date);
    if (date) {
      return date.toDateString() == now.toDateString()
        ? datemoment.format('HH:mm')
        : Math.abs(numDaysBetween(now, date)) <= 7
          ? datemoment.format('D, ddd')
          : datemoment.format('D, MMM');
    }
    return null;
  }

  onSwipeLeftRelease(evt, gestureState) {
    console.log(`${this.props.id} swiped`);
    const dx = Math.abs(gestureState.dx);
    const { id, } = this.props;
    if (dx > 200) {
      this.props.deleteTask(id);
      this.props.onDelete(id);
    } else if (dx > 100) {
      this.props.markDone(id);
      this.props.onMarkDone(id);
    }
  }

  onSwipeLeftMove(evt, gestureState) {
    const { id } = this.props;
    const dx = Math.abs(gestureState.dx);
    const payload = { id, dx };
    this.props.swipeLeft(payload);
  }

  renderMarkDone() {

  }

  render() {
    const {
      id,
      imgUri,
      title,
      content,
      alertAt,
      backgroundColor
    } = this.props;
    console.log('render ', id);
    var thumbnail = <Image style={styles.img}
      source={require('../assets/images/icon.png')} />;
    var timer = <Text style={styles.timer}>{this._formatDate(alertAt)}</Text>;
    return (

      <Container>
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
            onPress={_ => console.log(`${id} clicked`)}
            styles={{ container: { backgroundColor } }}
          />
        </MovableView>
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
  isLoading: PropTypes.bool,
  errorMsg: PropTypes.string,
  styles: PropTypes.object,
  swipeLeft: PropTypes.func,
  markDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state.taskItemReducer[ownProps.id])
  const {
    tasks,
    isLoading,
    errorMsg,
    styles,
    backgroundColor,
  } = state.taskItemReducer;
  return {
    tasks,
    isLoading,
    errorMsg,
    styles,
    backgroundColor,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return { swipeLeft: params => dispatch(swipeLeft(ownProps.namespace, params))};
// };

const mapDispatchToProps = { swipeLeft, markDone };

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
