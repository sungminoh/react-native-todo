import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Clipboard } from 'react-native';
import { Button, Image, Input, Overlay } from 'react-native-elements';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { formatDate } from '../utils/dateUtils';
import { timeSetting, screenHeight, screenWidth } from '../config';
import GridTile from '../components/GridTile';


class TaskDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Task',
  };

  onPressButton(setting) {
    console.log(setting)
  }

  timeSettingToButton(setting) {
    if (Array.isArray(setting)) {
      return setting.map(x => this.timeSettingToButton(x));
    }
    const { type, val, scale } = setting;
    let title = '';
    if (type === 'absolute') {
      title = <Text style={{ fontSize: 16 }}>{val}</Text>;
      // title = val;
    } else if (type === 'relative') {
      let sign = val > 0 ? '+' : '-';
      title = (
        <Text>
          <Text style={{ fontSize: 16 }}>{`${sign}${Math.abs(val)}`}</Text>
          <Text>{' '}</Text>
          <Text style={{ fontSize: 12 }}>{`${scale.slice(0, 1)}`}</Text>
        </Text>
      );
      // title = `${sign}${Math.abs(val)} ${scale.slice(0, 1)}`;
    }
    return <Button
      title={title}
      onPress={_ => this.onPressButton(setting)}
      buttonStyle={{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 0,
      }}
      titleStyle={{ fontSize: 12, color: 'gray' }}
    />;
  }
  render() {
    const {
      id,
      imgUri,
      title,
      content,
      alertAt,
    } = this.props;
    var img = imgUri ? <Image style={styles.img} source={{ uri: imgUri }} /> : null;
    var timer = <Text style={styles.timer}>{formatDate(alertAt)}</Text>;
    return (
      <Container>
        <Input placeholder={'title'} value={title} multiline={false} />
        {img}
        <Input placeholder={'note'} value={content} multiline={true} />
        <View><Text>{timer}</Text></View>
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={64}
          style={{ alignItems: 'center', position: 'absolute', bottom: 20, width: '100%' }}>
          <GridTile
            elements={this.timeSettingToButton(timeSetting)}
            styles={{ grid: styles.grid, element: styles.gridElement }}
          />
        </KeyboardAvoidingView>
      </Container >
    );
  }
}
const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  timer: {},
  gridContainer: {
    alignItems: 'center',
  },
  grid: {
    height: 150,
    width: screenWidth > 300 ? 300 : '95%',
  },
  gridElement: {
    padding: 1,
  },
});


TaskDetailScreen.propTypes = {
  id: PropTypes.number.isRequired,
  imgUri: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  alertAt: PropTypes.instanceOf(Date),
  isLoading: PropTypes.bool,
  errorMsg: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const {
    id,
    isLoading,
    errorMsg,
    alertAt,
  } = state.taskDetailScreenReducer;
  return {
    id,
    isLoading,
    errorMsg,
    alertAt,
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     markDone: params => dispatch(markDone(params)),
//     deleteTask: params => dispatch(deleteTask(params)),
//   };
// };
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetailScreen);