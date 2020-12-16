import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
  Text,
} from 'react-native';

// Inport Screens for homeStack to navigate between 
import HomeScreen from '../screens/homeScreen';
import SearchByCityScreen from '../screens/searchByCityScreen';
import SearchByCountryScreen from '../screens/searchByCoutryScreen.js';
import CityInhabitantsScreen from '../screens/cityInhabitantsScreen';
import CitiesOfCountryScreen from './../screens/citiesOfCountryScreen';


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
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SearchByCity" component={SearchByCityScreen} />
    <Stack.Screen name="SearchByCountry" component={SearchByCountryScreen} />
    <Stack.Screen name="CityInhabitants" component={CityInhabitantsScreen} />
    <Stack.Screen name="CitiesOfCountry" component={CitiesOfCountryScreen} />

  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);