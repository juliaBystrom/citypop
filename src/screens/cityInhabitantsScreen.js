import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PopulationDisplay from '../components/populationDisplay';
import ScreenTitle from '../components/screenTitle';


/* 
* Displays an city and its population.
* Input props: name of city to display and population
*/

export default function CityInhabitantsScreen({ route, navigation }) {
    const { displayCity, population } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScreenTitle title={displayCity} />
            <PopulationDisplay population={population} />

        </View>
    );
}