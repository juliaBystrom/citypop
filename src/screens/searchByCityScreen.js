import React, { useReducer, useEffect } from 'react';
import {
    View,
    Button
} from 'react-native';
import ScreenTitle from '../components/screenTitle';
import UserStringInput from '../components/userStringInput';
import UtilAPI from '../utils/utilAPI';
import { BASEURL } from '../../constants';
import { USERNAME } from '../../credentials';


const initialState = {
    city: '',
    isLoading: false,
    error: '',
}

function reducer(state, action) {
    switch (action.type) {
        case 'fieldChange': {
            return {
                ...state,
                [action.fieldName]: action.payload

            };
        }
        case 'search': {
            return {
                ...state,
                isLoading: true,
            }
        }
        default:
            return state;

    }
}



export default function SearchByCityScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { city, isLoading, error } = state;


    var data = {
        'name': city,
        'name_equals': city,
        'featureClass': 'P',
        'isNameRequired': 'true',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'relevance',
        'maxRows': '1',

    };

    // Function that ahndles when a user search fo a city
    const pressHandler = () => {

        dispatch({ type: 'search' });
        UtilAPI({baseURL: BASEURL, data: data});



    }

    // Function handles when the user press search
    const onChangeInput = (city) => {
        dispatch({ type: 'fieldChange', fieldName: 'city', payload: city });
        console.log(state);
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScreenTitle title="Search By City Screen" />
            <UserStringInput
                placeholder='Enter a city'
                // set to location because input should be a city 
                textContentType='location'
                value={city}
                onChange={onChangeInput}
            />
            <Button
                title='Search'
                onPress={pressHandler}

            />





        </View>
    );
}