import React from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';
import ScreenTitle from '../components/screenTitle';


// Empty CitiesOfCountryScreen.

export default function CitiesOfCountryScreen({ route, navigation }) {
    const { displayCountry, topCities } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScreenTitle title={displayCountry} />
            <FlatList
                numColumns={1}
                keyExtractor={(entry) => entry.city}
                data={topCities}
                renderItem={({ item }) => (
                    <Text>-</Text>
                )} />
        </View>
    );
}
