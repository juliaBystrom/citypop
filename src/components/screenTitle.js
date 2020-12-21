import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import sharedStyles from '../shared/sharedStyles';



/*
*  Text component to be used for titles on screens
*  Input props: Title string to be displayed
*
*/

export default function ScreenTitle({title}) {
    return (
        <View style={sharedStyles.screenTitleContainer}>
            <Text style={sharedStyles.screenTitle}>{title}</Text>
        </View>
    );
}