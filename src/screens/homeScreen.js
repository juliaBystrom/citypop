import React from 'react';
import {
    View,
    Text,
} from 'react-native';


// Empty HomeScreen.

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
        </View>
    );
}