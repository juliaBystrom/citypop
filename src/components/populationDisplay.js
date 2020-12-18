import React from 'react';
import {
    View,
    Text,
} from 'react-native';


/*
*  Displays population and a number
*  Input props: population number to display
*
*/

export default function PopulationDisplay({population}) {
    return (
        <View>
            <Text>POPULATION</Text>
            <Text>{population}</Text>
        </View>
    );
}