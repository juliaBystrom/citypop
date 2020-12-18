import React from 'react';
import {
    View,
    Text,
} from 'react-native';


// Empty CityInhabitantsScreen. 

export default function CityInhabitantsScreen({ route, navigation }) {
    const { displayCity, population } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScreenTitle title="City Inhabitants Screen"/>
        </View>
    );
}