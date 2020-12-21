import React from 'react';
import {
    Pressable,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import sharedStyles from '../shared/sharedStyles';
import COLOR from '../shared/colorConstants';

/*
*  Button component with icon 
*  Input props: 
*  iconName -        Name of icon to be displayed, see ICONS constants.js for availiable names
*  onPressHandler -  Function to be executed when the button is pressed
*/



export default function IconButton({ iconName, onPressHandler }) {
    const pressedButton = () => {
        onPressHandler();
    }
    return (
        <Pressable onPress={pressedButton} style={({ pressed }) => [(pressed ? sharedStyles.pressedButtonColor : sharedStyles.standardButtonColor), sharedStyles.iconButton]} >
            <Icon name={iconName} size={40} color={COLOR.TEXT} />
        </Pressable>
    );
}