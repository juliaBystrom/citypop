import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { ScreenTitle, StandardButton } from '../components';
import sharedStyles from '../shared/sharedStyles';



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