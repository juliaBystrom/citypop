import React from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';


/*
*  Takes userinput as string 
*  Input props: 
*  placeholder - String to be displayed in input field when no used input is given 
*  textContentType - Gives the system information about what type of content to be exptected to be inputed. Read more at https://reactnative.dev/docs/textinput#textcontenttype
*  value - value to hold the input string
*  onChange - function to be executed when the input field is changed by the user
*/

export default function UserStringInput({ props }) {
    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                textAlign='center'
                textContentType={props.textContentType}
                value={props.value}
                onChange={props.onChange}
             />
        </View>
    );
}