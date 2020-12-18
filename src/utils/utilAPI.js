import React, { useReducer, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { USERNAME } from '../../credentials';


export default function UtilAPI({ baseURL, data }) {

    let searchParams = new URLSearchParams(data);
    let url = encodeURI(baseURL + searchParams);
    console.log(url);

    fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            return responseJson;
        })
    .catch((error) => {
            console.error(error);
    });


}