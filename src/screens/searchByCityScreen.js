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
    displayCity: '',
    population: 0,
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
        case 'success': {
            return {
                ...state,
                city: '',
                isLoading: false,
                displayCity: action.displayCity,
                population: action.population,
            }
        }
        case 'error': {
            return {
                ...state,
                isLoading: false,
                error: action.errorMessage,
            }

        }
        default:
            return state;

    }
}



export default function SearchByCityScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { city, isLoading, error } = state;

    // data parameters to be sent 
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

    // Function that handles when a user search fo a city
    const pressHandler = () => {
        dispatch({ type: 'search' });
        UtilAPI({ baseURL: BASEURL, data: data, onSuccess: successSearch, onError: errorSearch });

    }

    // Function handles when the user press search
    const onChangeInput = (city) => {
        dispatch({ type: 'fieldChange', fieldName: 'city', payload: city });
    }

    // Function handles when the search query successed
    // Parameters is city name to display and population to be sent to the next frame
    const successSearch = (displayCity, population) => {
        dispatch({ type: 'success', displayCity: displayCity, population: population });
    }

    // Function handles when the search query gives an error
    // Parameters is city name to display and population to be sent to the next frame
    const errorSearch = (errorMessage) => {
        dispatch({ type: 'error', errorMessage: errorMessage});
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