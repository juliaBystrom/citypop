import React from 'react';
import {
    Pressable,
    Text,
} from 'react-native';


/*
*  Button component to be used for buttons in screens
*  Input props: 
*  text string to be displayed on the button 
*  onPress function to be executed when the button is pressed
*/

export default function StandardButton({ text, onPress }) {
    
    return (
        <Pressable onPress={onPress} style={sharedStyles.standardButton}>
            <Text style={sharedStyles.bodytext}>{text}</Text>
        </Pressable>
    );
}