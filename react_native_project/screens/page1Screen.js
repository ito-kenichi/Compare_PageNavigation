import React, { Component } from 'react';
import {
  Text,View,Button
} from 'react-native';

export default class Page1Screen extends Component {
  render() {
    return (
      <View>
        <Text>Page1</Text>
        <Button
          title="2ページ目へ"
          onPress={() => {
            this.props.navigation.navigate('Page2')
          }}
        />
      </View>
    );
  }
}