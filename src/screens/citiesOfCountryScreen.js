import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import { ScreenTitle, PressableCity } from '../components';
import sharedStyles from '../shared/sharedStyles';



/*  Screen that displays:
*  The country inputed as route param 'displayCountry'
*  The cities inputed as route param 'topCities'
*  Every city is an PressableCity component that if pressed will navigate to the CityInhabitants screen 
*  with data containting the name of city pressed and its population. This data is found in the inputed param 'topCities'
*/

export default function CitiesOfCountryScreen({ route, navigation }) {
    const { displayCountry, topCities } = route.params;


    const onCityPressed = (cityName) => {
        const cityToDisplay = topCities.find((entry) => {
            return entry.city === cityName;
        })


        navigation.navigate('CityInhabitants', {
            displayCity: cityToDisplay.city,
            population: cityToDisplay.population,

        })
    }


    return (
        <View style={sharedStyles.basicContainer}>
            <ScreenTitle title={displayCountry} />
            <View style={sharedStyles.componentsContainer}>
                <FlatList
                    numColumns={1}
                    data={topCities}
                    keyExtractor={(entry) => entry.city}
                    renderItem={({ item }) => (
                        <PressableCity name={item.city} onPressFunction={onCityPressed} />
                    )} />
            </View>
        </View>
    );
}
