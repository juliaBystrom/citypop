import React from 'react';
import {
    View,
} from 'react-native';
import sharedStyles from '../shared';
/*
* Basic container to be used in application
*
*/

export default function BasicContainer(children) {

    return (
        <View style={sharedStyles.basicContainer} >
            {children}
        </View>
    );
}