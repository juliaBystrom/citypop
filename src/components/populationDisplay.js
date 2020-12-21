import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import sharedStyles from '../shared/sharedStyles';



/*
*  Displays population and a number
*  Input props: population number to display
*
*/

export default function PopulationDisplay({population}) {
    return (
        <View style={sharedStyles.populationDisplay}>
            <Text style={sharedStyles.bodytext}>POPULATION</Text>
            <Text style={[sharedStyles.bodytext,sharedStyles.largeText]}>{population}</Text>
        </View>
    );
}