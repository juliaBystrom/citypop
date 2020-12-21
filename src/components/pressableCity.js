import React from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';
import sharedStyles from '../shared/sharedStyles';


/*
*  A basic button 
*  Input props: 
*  name -            Display string
*  onPressFunction - Function o execute when the button is pressed
*/

export default function PressableCity({name, onPressFunction}) {

    const onPress = () => {
        onPressFunction(name);
    }
    
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [(pressed ? sharedStyles.pressedButtonColor : sharedStyles.standardButtonColor), sharedStyles.standardButton]}>
            <Text style={sharedStyles.bodytext}>{name}</Text>
        </Pressable>
    );
}