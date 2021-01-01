import React, { Component } from 'react';
import {
  Text,View,Button
} from 'react-native';

export default class page2Screen extends Component {
  render() {
    return (
      <View>
        <Text>Page2</Text>
        <Button
          title="3ページ目へ"
          onPress={() => {
            this.props.navigation.navigate('Page3')
          }}
        />
      </View>
    );
  }
}