import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput
} from 'react-native';
import sharedStyles from '../shared/sharedStyles';



/*
*  Takes userinput as string 
*  Input props: 
*  placeholder - String to be displayed in input field when no used input is given 
*  textContentType - Gives the system information about what type of content to be exptected to be inputed. Read more at https://reactnative.dev/docs/textinput#textcontenttype
*  value - value to hold the input string, max 100 chars can be inputed 
*  onChange - function to be executed when the input field is changed by the user
*/

export default function UserStringInput(props) {
    const [focus, setfocus] = useState(false);

    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                textAlign='center'
                textContentType={props.textContentType}
                value={props.value}
                onChangeText={props.onChange}
                style={[focus ? sharedStyles.textInputOnFocusColor : sharedStyles.textInputColor, sharedStyles.textInput ]}
                maxLength={100}
                onFocus={()=> setfocus(true)}
                onBlur={()=> setfocus(false)}
             />
        </View>
    );
}