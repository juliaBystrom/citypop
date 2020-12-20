import React, { useReducer, useEffect } from 'react';
import {
    View,
    Button
} from 'react-native';
import { ScreenTitle, UserStringInput } from '../components';
import UtilAPI from '../utils/data-fetching/utilAPI';
import { searchByCityReducer as reducer } from '../utils/reducers';
import { getSearchParamsCityGlobally } from '../utils/data-fetching/apiParams';
import { BASEURL } from '../../constants';
import useDidMount from '../utils/useDidMount';


const initialState = {
    city: '',
    isLoading: false,
    error: '',
    displayCity: '',
    population: 0,
}



export default function SearchByCityScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { city, isLoading, error, displayCity, population } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();



    // Function that handles when a user search fo a city
    const pressHandler = () => {
        dispatch({ type: 'search' });
        UtilAPI({
            baseURL: BASEURL,
            data: getSearchParamsCityGlobally(city),
            onSuccess: successSearch,
            onError: errorSearch
        });

    }

    // When a city is successfully searched for the json is parsed to get name and populaiton. State is updated acordingly. 
    const successSearch = ({ responseJson }) => {
        let name = responseJson.geonames[0].name;
        let population = responseJson.geonames[0].population;

        dispatch({
            type: 'success',
            displayCity: name,
            population: population
        });

    }

    // When displayCity or cities is updated this use effect hock will navigate to CityInhabitants screen
    useEffect(() => {
        if (didMount) {
            navigation.navigate('CityInhabitants', {
                displayCity: displayCity,
                population: population,
            });

        }

    }, [displayCity, population]
    )

    // Function handles when the search query gives an error
    const errorSearch = (errorMessage) => {
        dispatch({ type: 'error', errorMessage: errorMessage });
    }




    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScreenTitle title="Search By City Screen" />
            <UserStringInput
                placeholder='Enter a city'
                // set to location because input should be a city 
                textContentType='location'
                value={city}
                onChange={(city) => dispatch({ type: 'fieldChange', fieldName: 'city', payload: city })}
            />
            <Button
                title='Search'
                onPress={pressHandler}

            />
        </View>
    );
}