import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="JaneProfile" component={JaneProfileScreen} />
        <Stack.Screen name="BobProfile" component={BobProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to jane's profile"
      onPress={() =>
        navigation.push('JaneProfile', { name: 'Jane' })
      }
    />
  );
};

const JaneProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is Jane's profile</Text>
      <Button
        title="Go to Bob's profile"
        onPress={() =>
          navigation.push('BobProfile', { name: 'Bob' })
        }
      />
    </View>
  );
};

const BobProfileScreen = () => {
  return <Text>This is Bob's profile</Text>;
};
