import React from 'react';
import PropTypes from 'prop-types';
import { Animated, PanResponder } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

function slowdown(n) {
  return n * 0.98;
}

export default class MovableView extends React.Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = this.createPanResponder();
  }

  setPosition(gestureState) {
    let {
      x, xDirection,
      y, yDirection,
      delay
    } = this.props;
    if (!x && !y) {
      x = true;
      y = true;
    }
    let { dx, dy } = gestureState;
    if (delay) {
      dx = slowdown(dx);
      dy = slowdown(dy);
    }
    if(xDirection === 'positive') dx = Math.max(0, dx);
    if(xDirection === 'negative') dx = Math.min(0, dx);
    if(yDirection === 'positive') dy = Math.may(0, dy);
    if(yDirection === 'negative') dy = Math.min(0, dy);
    let coordinate = {};
    coordinate.x = x ? dx : 0;
    coordinate.y = y ? dy : 0;
    this.position.setValue(coordinate);
  }

  createPanResponder() {
    const {
      onMove,
      onRelease,
      onReleaseBack,
    } = this.props;
    return PanResponder.create({
      onStartShouldSetPanResponder: (ent, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.setPosition(gestureState);
        onMove && onMove(evt, gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        onReleaseBack && Animated.spring(this.position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
        }).start();
        onRelease && onRelease(evt, gestureState);
      }
    });
  }

  render() {
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[
          {
            transform: this.position.getTranslateTransform(),
          },
          this.props.style
        ]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

MovableView.propTypes = {
  x: PropTypes.bool,
  xDirection: PropTypes.string,
  y: PropTypes.bool,
  yDirection: PropTypes.string,
  delay: PropTypes.bool,
  onMove: PropTypes.func,
  onRelease: PropTypes.func,
  onReleaseBack: PropTypes.bool,
};


MovableView.defaultProps = {
  xDirection: 'bidirection',
  yDirection: 'bidirection',
};