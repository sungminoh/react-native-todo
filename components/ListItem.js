import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';
import colors from '../constants/colors';


function mergePropStyle(props, style) {
  if (props && props.style) {
    props.style = {
      ...style,
      ...props.style
    };
  } else if (props) {
    props.style = {
      ...style
    };
  } else {
    props = {
      style: {
        ...style
      }
    };
  }
  return props;
}


class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderElement(element, props, onPress) {
    if (!element) {
      return null;
    }
    let content = null;
    if (React.isValidElement(element)) {
      content = element;
    } else {
      content = (
        // TODO: make this to the icon
        <Text>{element}</Text>
      );
    }
    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress} {...props}>
          {content}
        </TouchableOpacity>
      );
    } else {
      return (
        <View {...props} >
          {content}
        </View>
      );
    }
  }

  renderLeftElement() {
    const {
      leftElement,
      leftElementProps,
      onLeftElementPress,
      onPress,
    } = this.props;
    const props = mergePropStyle(leftElementProps, styles.leftElement);
    return this.renderElement(
      leftElement,
      props,
      onLeftElementPress | onPress,
    );
  }

  renderRightElement() {
    const {
      rightElement,
      rightElementProps,
      onRightElementPress,
      onPress,
    } = this.props;
    const props = mergePropStyle(rightElementProps, styles.rightElement);
    return this.renderElement(
      rightElement,
      props,
      onRightElementPress | onPress,
    );
  }

  renderCenterElement() {
    const {
      centerElement,
      centerElementProps,
      onPress,
    } = this.props;
    const props = mergePropStyle(centerElementProps, styles.centerElement);
    let content = null;
    if (React.isValidElement(centerElement)) {
      content = centerElement;
    } else if (centerElement) {
      let primaryText = null;
      let secondaryText = null;
      let tertiaryText = null;

      if (typeof centerElement === 'string') {
        primaryText = centerElement;
      } else {
        /* eslint-disable prefer-destructuring */
        primaryText = centerElement.primaryText;
        secondaryText = centerElement.secondaryText;
        tertiaryText = centerElement.tertiaryText;
        /* eslint-enable prefer-destructuring */
      }
      content = (
        <View>
          <View>
            <View style={{}}>
              <Text numberOfLines={1} style={{}}>
                {primaryText}
              </Text>
            </View>
          </View>
          {!!secondaryText && (
            <View>
              <Text numberOfLines={tertiaryText ? 1 : 2} style={{}} >
                {secondaryText}
              </Text>
            </View>
          )}
          {!!tertiaryText && (
            <View>
              <Text numberOfLines={1} style={{}}>
                {tertiaryText}
              </Text>
            </View>
          )}
        </View>
      );
    }
    return this.renderElement(content, props, onPress);
  }

  render() {
    return (
      <View>
        <View style={[styles.container, this.props.styles.container]}>
          {this.renderLeftElement()}
          {this.renderCenterElement()}
          {this.renderRightElement()}
        </View>
        {this.props.divider ? <View style={styles.divider} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: colors.borderColor,
    height: StyleSheet.hairlineWidth,
    margin: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftElement: {
    margin: 8,
    width: 56,
  },
  centerElement: {
    flex: 1,
    flexDirection: 'column',
  },
  rightElement: {
    marginRight: 20,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});


ListItem.propTypes = {
  divider: PropTypes.bool,

  leftElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  leftElementProps: PropTypes.object,
  onLeftElementPress: PropTypes.func,

  centerElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.shape({
      primaryText: PropTypes.string.isRequired,
      secondaryText: PropTypes.string,
      tertiaryText: PropTypes.string,
    }),
  ]),
  centerElementProps: PropTypes.object,
  onPress: PropTypes.func,

  rightElement: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  rightElementProps: PropTypes.object,
  onRightElementPress: PropTypes.func,
  
  styles: PropTypes.object,
};

ListItem.defaultProps = {
  leftElementProps: {},
  centerElementProps: {},
  rightElementProps: {},
  styles: StyleSheet.create({container: {}})
};

export default ListItem;