import React, { useReducer, useEffect } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import { ScreenTitle, UserStringInput, IconButton, DisplayError } from '../components';
import { ERROR_MESSAGE, ICONS, BASEURL } from '../shared';
import sharedStyles from '../shared/sharedStyles';
import COLOR from '../shared/sharedStyles';
import UtilAPI from '../utils/data-fetching/utilAPI';
import validInput from '../utils/validInput';
import checkStatus from '../utils/data-fetching/checkStatus';
import useDidMount from '../utils/useDidMount';
import { getSearchParamsCountry, getSearchParamsMostPopulatedCitiesOfCountry } from '../utils/data-fetching/apiParams';
import { searchByCountryReducer as reducer } from '../utils/reducers';
import { Colors } from 'react-native/Libraries/NewAppScreen';


// SearchByCountryScreen 

const initialState = {
    country: '',
    isLoading: false,
    error: '',
    showError: false,
    displayCountry: '',
    cities: [
        { city: '', population: 0 },
        { city: '', population: 0 },
        { city: '', population: 0 }
    ],
    countryCode: 0,

}

export default function SearchByCountryScreen({ navigation }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { country, isLoading, error, displayCountry, cities, countryCode, showError } = state;

    // False if the component is just being rendered and inserted into dom, true if not
    const didMount = useDidMount();

    // Function that handles when a user search fo a country
    const pressSearchHandler = () => {
        if (country.length === 0) {
            // If length of search term is 0
            return errorSearch(ERROR_MESSAGE.notValidInputLength);
        } else if (validInput(country)) {
            dispatch({ type: 'search' });

            UtilAPI({
                baseURL: BASEURL,
                data: getSearchParamsCountry(country),
                onSuccess: successSearchCountry,
                onError: errorSearch
            });

        } else {
            // If search term contains non alphanumeric characters
            return errorSearch(ERROR_MESSAGE.notValidInputChar);
        }



    }

    // When a country is successfully searched for.
    // Will update state with country code from returned json. Then fetch the most populated cities of that country
    const successSearchCountry = (responseJson) => {

        let noError = checkStatus(responseJson, errorSearch, ERROR_MESSAGE.noCountryFound);
        if (noError) {
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




    }

    // If most populated cities of country is fetched this funciton will parse json to an array of found cities containing name and populaiton.
    // The dispatch funciton will update the state.
    const successSearch = (responseJson) => {
        let noError = checkStatus(responseJson, errorSearch, ERROR_MESSAGE.noCitiesOfCountryFound);
        if (noError) {
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
        console.log("ERROR MESSSAGE GIVEN:");
        console.log(errorMessage);
        dispatch({ type: 'error', errorMessage: errorMessage });
    }


    // To solve issue with react 0.63.3 the color of the ActivityIndicator is given as a string. Should be same color as COLORS.FOCUS
    return (
        <View style={sharedStyles.basicContainer}>
            <ScreenTitle title="SEARCH BY COUNTRY" />
            {isLoading ? <ActivityIndicator size="large" color='#B4DC7F' /> :
                <View style={sharedStyles.componentsContainer}>
                    {showError ? DisplayError({ error }) : <></>}
                    <UserStringInput
                        placeholder='Enter a country'
                        textContentType='countryName'
                        value={country}
                        onChange={(country) => dispatch({ type: 'fieldChange', fieldName: 'country', payload: country })}
                    />
                    <IconButton
                        iconName={ICONS.search}
                        onPressHandler={pressSearchHandler}
                    />
                </View>
            }

        </View>
    );
}