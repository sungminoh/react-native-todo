import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, PanResponder, Dimensions, View, Animated } from 'react-native';
import { Image } from 'react-native-elements';
import { numDaysBetween, formatDate } from '../utils/dateUtils';
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
  onSwipeLeftRelease(evt, gestureState) {
    console.log(`${this.props.id} swiped`);
    const dx = Math.abs(gestureState.dx);
    const { id, } = this.props;
    if (dx > 200) {
      // this.props.deleteTask(id);
      this.props.onDelete(id);
    } else if (dx > 100) {
      // this.props.markDone(id);
      this.props.onMarkDone(id);
    }
    // this.setState({ ...this.state, backgroundColor: 'white'});
  }

  onSwipeLeftMove(evt, gestureState) {
    // const { id } = this.props;
    const dx = Math.abs(gestureState.dx);
    // const payload = { id, dx };
    // this.props.swipeLeft(payload);
    // this.props.onSwipeLeft(id);
    const backgroundColor = dx > 200 ? 'red' : dx > 100 ? 'green' : this.state.backgroundcolor;
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
            // onPress={_ => console.log(`${id} clicked`)}
            onPress={this.openDetailPage.bind(this)}
            styles={{ container: { backgroundColor, minHeight: 60 } }}
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
