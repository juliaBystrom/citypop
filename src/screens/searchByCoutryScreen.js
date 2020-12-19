import React, { useReducer, useEffect } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { ScreenTitle, UserStringInput } from '../components';
import UtilAPI from '../utils/data-fetching/utilAPI';
import { BASEURL } from '../../constants';
import { USERNAME } from '../../credentials';
import useDidMount from '../utils/useDidMount';
import { getSearchParamsCountry, getSearchParamsMostPopulatedCitiesOfCountry } from '../utils/data-fetching/apiParams';
import {searchByCountryReducer} from '../utils/reducers';

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


export default function SearchByCountryScreen({ navigation }) {
    const [state, dispatch] = useReducer(searchByCountryReducer, initialState)
    const { country, isLoading, error, displayCountry, cities, countryCode } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();

    // Function that handles when a user search fo a country
    const pressHandler = () => {
        dispatch({ type: 'search' });
        UtilAPI({
            baseURL: BASEURL,
            data: getSearchParamsCountry(country),
            onSuccess: successSearchCountry,
            onError: errorSearch
        });

    }

    // When a country is successfully searched for.
    // Will update state with country code from returned json. Then fetch the most populated cities of that country
    const successSearchCountry = ({ responseJson }) => {
        // Will return a list of only the name´s of cities 
        const countryCode = responseJson.geonames[0].countryCode;
        dispatch({ type: 'fieldChange', fieldName: 'countryCode', payload: countryCode });

        UtilAPI({
            baseURL: BASEURL,
            data: getSearchParamsMostPopulatedCitiesOfCountry(country, countryCode),
            onSuccess: successSearch,
            onError: errorSearch
        });

    }

    // If most populated cities of country is fetched this funciton will parse json to an array of found cities containing name and populaiton.
    // The dispatch funciton will update the state.
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