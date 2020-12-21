import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import PopulationDisplay from '../components/populationDisplay';
import ScreenTitle from '../components/screenTitle';
import sharedStyles from '../shared/sharedStyles';


/* 
* Displays an city and its population.
* Input props: name of city to display and population
*/

export default function CityInhabitantsScreen({ route, navigation }) {
    const { displayCity, population } = route.params;
    return (
        <View style={sharedStyles.basicContainer}>
            <ScreenTitle title={displayCity} />
            <View style={sharedStyles.componentsContainer}>
                <PopulationDisplay population={population} />
            </View>

        </View>
    );
}