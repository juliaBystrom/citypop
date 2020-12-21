/*
*  Button component with icon 
*  Input props: 
*  Name of icon to be displayed, see ICONS constants.js for availiable names
*  onPress function to be executed when the button is pressed
*/

import React from 'react';
import {
    Pressable,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import sharedStyles from '../shared/sharedStyles';
import COLOR from '../shared/colorConstants';


export default function IconButton({iconName, onPressHandler}) {
    const pressedButton = () =>{
        onPressHandler();
    }
    return (
        <Pressable onPress={pressedButton} style={sharedStyles.iconButton}>
            <Icon name={iconName} size={40} color={COLOR.TEXT} />
        </Pressable>
    );
}