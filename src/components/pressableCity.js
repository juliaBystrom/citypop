import React from 'react';
import {
    View,
    Text,
    Pressable,
} from 'react-native';


/*
*  A basic button 
*  Input props: 
*  name - Display string
*  onPressFunction - Function o execute when the button is pressed
*/

export default function PressableCity({name, onPressFunction}) {

    const onPress = () => {
        onPressFunction(name);
    }
    
    return (
        <Pressable onPress={onPress}>
            <Text>{name}</Text>
        </Pressable>
    );
}