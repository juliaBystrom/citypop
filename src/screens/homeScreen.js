import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import ScreenTitle from '../components/screenTitle';
import StandardButton from '../components/standardButton';


// Empty HomeScreen.




export default function HomeScreen({ navigation }) {



    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <ScreenTitle title="City Pop" />
            <StandardButton text="SEARCH BY CITY" onPress={() => navigation.push("SearchByCity")} />
            <StandardButton text="SEARCH BY COUNTRY" onPress={() => navigation.push("SearchByCountry")} />
        </View>
    );
}