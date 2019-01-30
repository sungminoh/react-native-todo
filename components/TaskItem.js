import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { numDaysBetween } from '../utils/dateUtils';
import { Avatar, Card, ListItem, withTheme } from 'react-native-material-ui'
// import Container from '../components/Container'

export default class TaskItem extends React.Component {
  constructor(props) {
    super(props);
  }

  _formatDate(date) {
    const now = new Date();
    const datemoment = moment(date);
    if (date) {
      return date.toDateString() == now.toDateString()
        ? datemoment.format('HH:mm')
        : Math.abs(numDaysBetween(now, alertAt)) <= 7
        ? datemoment.format('D, ddd')
        : datemoment.format('D, MMM');
    }
    return null;
  }

  render() {
    const {
      imgUri,
      title,
      content,
      alertAt
    } = this.props;

    var img = <Image style={styles.thumbnail}
                     source={require('../assets/images/icon.png')} />;
    var avatar = imgUri
      ? <Avatar image={img} />
      : null;
    var timer = <Text style={styles.timer}>{this._formatDate(alertAt)}</Text>;

    return (
      <Card onPress={_ => console.log(this.props)}>
        <ListItem
          divider
          leftElement={avatar}
          centerElement={{
              primaryText: title,
              secondaryText: content,
          }}
          rightElement={timer}
        />
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between"
  },
  thumbnailContainer: {
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
  contentContainer: {
    flex: 1,
    flexDirection: "column",
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
