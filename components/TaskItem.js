import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, PanResponder, Dimensions, View, Animated } from 'react-native';
import moment from 'moment';
import { numDaysBetween } from '../utils/dateUtils';
import { Avatar, Card, withTheme } from 'react-native-material-ui';
import ListItem from './ListItem';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import Container from '../components/Container';
import MovableView from '../components/MovableView';
import Swipeout from 'react-native-swipeout';
var swipeoutBtns = [
  {
    text: 'Button'
  }
]

// const SCREEN_WIDTH = Dimensions.get('window').width;

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    // this.panResponder = this._createPanResponder();
    // this.position = new Animated.ValueXY();
    // this.state = { right: 0 };
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
    if (dx > 100) {
      this.props.onMarkDone(id);
    } else if(dx > 200){
      this.props.onDelete(id);
    }
  }

  onSwipeLeftMove(evt, gestureState) {
    const dx = Math.abs(gestureState.dx);
    if (dx > 100){
      console.log(100);
    } else if(dx > 200){
      console.log(200);
    }
  }

  render() {
    const {
      imgUri,
      title,
      content,
      alertAt,
    } = this.props;

    var thumbnail = <Image style={styles.img}
      source={require('../assets/images/icon.png')} />;
    var timer = <Text style={styles.timer}>{this._formatDate(alertAt)}</Text>;
    return (

      <Container>
        {/* <GestureRecognizer
          //onSwipe={(direction, state) => this.onSwipe(direction, state)}>
          onSwipeLeft={this.onSwipeLeft.bind(this)}> */}
        <MovableView x xDirection={'negative'}
          onReleaseBack onRelease={this.onSwipeLeftRelease.bind(this)}
          onMove={this.onSwipeLeftMove.bind(this)}>
        {/* <Animated.View
          {...this.panResponder.panHandlers}
          style={{ transform: this.position.getTranslateTransform() }}> */}
        {/* <Swipeout right={swipeoutBtns} autoClose close> */}
          <ListItem
            divider
            leftElement={thumbnail}
            centerElement={{
              primaryText: title,
              secondaryText: content,
            }}
            rightElement={timer}
            onPress={_ => console.log(`${this.props.id} clicked`)}
          />
        {/* </Swipeout> */}
        {/* </Animated.View> */}
        </MovableView>
        {/* </GestureRecognizer> */}
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
};

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
