import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import page2Screen from './screens/page2Screen';
import Page1Screen from './screens/page1Screen';
import Page1DetailScreen from './screens/page1DetailScreen';

// setting main nav
const MainStack = createStackNavigator(
  {
    Page1: Page1Screen,
    Page2: page2Screen,
    Page3: Page1DetailScreen,
  }
)

const AppContainer = createAppContainer(MainStack)

export default class App extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}