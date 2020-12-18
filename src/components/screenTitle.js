import React from 'react';
import {
    View,
    Text,
} from 'react-native';


/*
*  Text component to be used for titles on screens
*  Input props: Title string to be displayed
*
*/

export default function ScreenTitle({title}) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}