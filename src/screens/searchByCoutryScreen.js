import React, { useReducer, useEffect } from 'react';
import {
    View,
    Text,
    Button,
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
    countryCode: 0,

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
        case 'updateId': {
            return {
                ...state,
                countryCode: action.countryCode,
            }
        }
        default:
            return state;

    }
}

export default function SearchByCountryScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { country, isLoading, error, displayCountry, cities, countryCode } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();


    // Data parameters to be sent when finding countryCode of country searched for
    var dataFindCountry = {
        'name': country,
        'name_equals': country,
        'featureClass': 'A',
        'isNameRequired': 'true',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'relevance',
        'maxRows': '1',
    };


    // Data parameters to be sent when finding largest cities of country searched for
    var dataFindCities = {
        'p': country,
        'country': countryCode,
        'featureClass': 'P',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'population',
        'maxRows': '3',
    };

    // Function that handles when a user search fo a country
    const pressHandler = () => {
        dispatch({ type: 'search' });
        UtilAPI({ baseURL: BASEURL, data: dataFindCountry, onSuccess: successSearchCountry, onError: errorSearch });

    }

    const successSearchCountry = ({ responseJson }) => {
        // Will return a list of only the name´s of cities 
        const countryCode = responseJson.geonames[0].countryCode;
        dispatch({ type: 'updateId', countryCode: countryCode });

    }

    // When the countryCode is changed this userhock will call UtilAPI to search for largest city within that country
    useEffect(() => {
        if (didMount) {
            UtilAPI({ baseURL: BASEURL, data: dataFindCities, onSuccess: successSearch, onError: errorSearch });
        }

    }, [countryCode]
    )

    // Function handles when the search query successed
    // Parameters is country name to display with up to 3 of the most populated cities in that country
    const successSearch = ({ responseJson }) => {
        // Will return a list of only the name´s of cities 
        const citiesFound = responseJson.geonames.map((entry) => {
            return { city: entry.name, population: entry.population };
        });

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