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


export default function IconButton({iconName}, onPress) {
    
    return (
        <Pressable onPress={onPress}>
            <Icon name={iconName} size={30} />
        </Pressable>
    );
}