const React = require('react');
const ReactNative = require('react-native');
const { Button, View, FlatList, Text } = ReactNative;
import MovableView from '../components/MovableView';

export default class Test extends React.Component {
  render() {
    return (
      <View>
        <FlatList renderItem={x => {
          return (
            <View>
              <MovableView>
                <Button title={''+x} onPress={x => console.log(x)}/>
              </MovableView>
            </View>
          );
        }}
          data={[1, 2, 3, 4, 5]} />
        <View style={{ flex: 1 }}>
          <View>
            <MovableView style={{ backgroundColor: 'gray' }}>
              <Text>asd</Text>
            </MovableView>
          </View>
          <View style={{ backgroundColor: 'red' }}>
            <Text>123</Text>
          </View>
          <View style={{ backgroundColor: 'yello' }}>
            <Text>qwe</Text>
          </View>
        </View>
      </View>
    );
  }
}
