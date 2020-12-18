import React, { useReducer, useEffect } from 'react';
import {
    View,
    Text,
} from 'react-native';
import ScreenTitle from '../components/screenTitle';
import UserStringInput from '../components/userStringInput';
import UtilAPI from '../utils/utilAPI';
import { BASEURL } from '../../constants';
import { USERNAME } from '../../credentials';
import useDidMount from '../utils/useDidMount';


// SearchByCountryScreen 

const initialState = {
    country: '',
    isLoading: false,
    error: '',
    displayCountry: '',
    cities: [
        { city: '', population: 0 },
        { city: '', population: 0 },
        { city: '', population: 0 }
    ],

}
function reducer(state, action) {
    switch (action.type) {
        case 'fieldChange': {
            return {
                ...state,
                [action.country]: action.payload

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
                country: '',
                isLoading: false,
                displayCountry: action.displayCountry,
                cities: action.cities,
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

export default function SearchByCountryScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { country, isLoading, error, displayCountry, cities } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();

    // data parameters to be sent 
    var data = {
        'name': country,
        'featureClass': 'P',
        'isNameRequired': 'true',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'population',
        'maxRows': '3',
    };

    // Function that handles when a user search fo a country
    const pressHandler = () => {
        dispatch({ type: 'search' });
        UtilAPI({ baseURL: BASEURL, data: data, onSuccess: successSearch, onError: errorSearch });

    }

    // Function handles when the search query successed
    // Parameters is country name to display with up to 3 of the most populated cities in that country
    const successSearch = ({ responseJson }) => {
        // Will return a list of only the name´s of cities 
        const citiesFound = responseJson.map((geonames) => {
            return { city: geonames.name, population: geonames.population };
        });

        console.log(citiesFound);

        dispatch({
            type: 'success',
            displayCountry: country,
            cities: citiesFound,
        });

    }

    // When displayCountry or cities is updated this use effect hock will navigate to CitiesOfCountry screen
    useEffect(() => {
        if (didMount) {
            navigation.navigate('CitiesOfCountry', {
                displayCountry: displayCountry,
                topCities: cities,
            });

        }

    }, [displayCountry, cities]
    )

    // Function handles when the search query gives an error
    const errorSearch = (errorMessage) => {
        dispatch({ type: 'error', errorMessage: errorMessage });
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScreenTitle title="SEARCH BY COUNTRY" />
            <UserStringInput
                placeholder='Enter a country'
                textContentType='countryName'
                value={country}
                onChange={(country) => dispatch({ type: 'fieldChange', fieldName: 'country', payload: country })}
            />
            <Button
                title='Search'
                onPress={pressHandler}
            />

        </View>
    );
}