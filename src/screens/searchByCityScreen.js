import React, { useReducer, useEffect } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import { ScreenTitle, UserStringInput, IconButton, DisplayError } from '../components';
import { ERROR_MESSAGE, ICONS, BASEURL } from '../shared';
import sharedStyles from '../shared/sharedStyles';
import UtilAPI from '../utils/data-fetching/utilAPI';
import validInput from '../utils/validInput';
import { searchByCityReducer as reducer } from '../utils/reducers';
import { getSearchParamsCityGlobally } from '../utils/data-fetching/apiParams';
import checkStatus from '../utils/data-fetching/checkStatus';
import useDidMount from '../utils/useDidMount';



const initialState = {
    city: '',
    isLoading: false,
    error: '',
    showError: false,
    displayCity: '',
    population: 0,
}


export default function SearchByCityScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { city, isLoading, error, displayCity, population, showError } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();

    // Function that handles when a user search fo a city
    const pressSearchHandler = () => {

        if (city.length === 0) {
            // If length of search term is 0
            return errorSearch(ERROR_MESSAGE.notValidInputLength);


        } else if (validInput(city)) {
            dispatch({ type: 'search' });
            UtilAPI({
                baseURL: BASEURL,
                data: getSearchParamsCityGlobally(city),
                onSuccess: successSearch,
                onError: errorSearch
            });
        } else {
            // If search term contains non alphanumeric characters
            return errorSearch(ERROR_MESSAGE.notValidInputChar);
        }


    }

    // When a city is successfully searched for the json is parsed to get name and populaiton. State is updated acordingly. 
    const successSearch = (responseJson) => {

        let noError = checkStatus(responseJson, errorSearch, ERROR_MESSAGE.noCityFound);

        if (noError) {
            let name = responseJson.geonames[0]?.name;
            let population = responseJson.geonames[0]?.population;

            dispatch({
                type: 'success',
                displayCity: name,
                population: population
            });

        }

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
        console.log("ERROR MESSSAGE GIVEN:");
        console.log(errorMessage);
        dispatch({ type: 'error', errorMessage: errorMessage });
    }


    // To solve issue with react 0.63.3 the color of the ActivityIndicator is given as a string. Should be same color as COLORS.FOCUS

    return (
        <View style={sharedStyles.basicContainer}>

            <ScreenTitle title="Search By City Screen" />
            {isLoading ? <ActivityIndicator size="large" color='#B4DC7F'/> :                <View style={sharedStyles.componentsContainer}>
                    {showError ? DisplayError({ error }) : <></>}
                    <UserStringInput
                        placeholder='Enter a city'
                        // set to location because input should be a city 
                        textContentType='location'
                        value={city}
                        onChange={(city) => dispatch({ type: 'fieldChange', fieldName: 'city', payload: city })}
                    />
                    <IconButton
                        iconName={ICONS.search}
                        onPressHandler={pressSearchHandler}

                    />
                </View>}

        </View>
    );
}