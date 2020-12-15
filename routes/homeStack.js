import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    View,
    Text,
  } from 'react-native';

// Inport Screens for homeStack to navigate between 



// Example Screen to be used as sceleton code.

function ExampleScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Example Screen</Text>
      </View>
    );
  }



// Create the Stack used for navigation
const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Example">
         <Stack.Screen name="Example" component={ExampleScreen} options={{ title: 'Example title' }} />
        
    </Stack.Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeStack />
    </NavigationContainer>
);