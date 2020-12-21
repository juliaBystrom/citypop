import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import sharedStyles from '../shared/sharedStyles';

/*
*  Text component to be used for display a error
*  Input props: 
*  error - Title string to be displayed
*
*/

export default function DisplayError({error}) {

    return (
        <View style={sharedStyles.errorDisplay}>
            <Text style={sharedStyles.bodytext}>{error}</Text>
        </View>
    );
}