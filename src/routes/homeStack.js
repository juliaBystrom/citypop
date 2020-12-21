import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderBackButton } from '@react-navigation/stack';

// Inport Screens for homeStack to navigate between 
import HomeScreen from '../screens/homeScreen';
import SearchByCityScreen from '../screens/searchByCityScreen';
import SearchByCountryScreen from '../screens/searchByCoutryScreen.js';
import CityInhabitantsScreen from '../screens/cityInhabitantsScreen';
import CitiesOfCountryScreen from './../screens/citiesOfCountryScreen';

// Import shared styling 
import sharedStyles from '../shared/sharedStyles';

// Create the Stack used for navigation
const Stack = createStackNavigator();

/*  
*   This is the header options used for every screen except main screen.
*   When pressing the back button in the header it will take the user to the home screen
*   It displays a back button and on ios it will display CityPop as label
*/
const screenOptions = ({ navigation }) => ({
  headerStyle: sharedStyles.headerStyle,
  headerBackTitle: "CityPop",
  headerTransparent: true,
  titleShown: false,
  title: '',
  headerLeft: (props) => (
    <HeaderBackButton
      {...props}
      onPress={() => {
        navigation.popToTop();
      }}
    />)

});

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} options={{
      headerShown: false,
    }} />
    <Stack.Screen name="SearchByCity" component={SearchByCityScreen} options={screenOptions} />
    <Stack.Screen name="SearchByCountry" component={SearchByCountryScreen} options={screenOptions} />
    <Stack.Screen name="CityInhabitants" component={CityInhabitantsScreen} options={screenOptions} />
    <Stack.Screen name="CitiesOfCountry" component={CitiesOfCountryScreen} options={screenOptions} />

  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);