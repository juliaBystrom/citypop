import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { ScreenTitle, StandardButton } from '../components';
import sharedStyles from '../shared/sharedStyles';

/*  
* Home Screen that displays:
*  City Pop title
*  Buttons for SEARCH BY CITY, SEARCH BY COUNTRY
*/



export default function HomeScreen({ navigation }) {

    return (
        <View style={sharedStyles.basicContainer}>
            <ScreenTitle title="CityPop" />
            <View style={sharedStyles.componentsContainer}>
                <StandardButton text="SEARCH BY CITY" onPress={() => navigation.push("SearchByCity")} />
                <StandardButton text="SEARCH BY COUNTRY" onPress={() => navigation.push("SearchByCountry")} />
            </View>

        </View>

    );
}