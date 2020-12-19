/*
 Contains functions returning data params to be sent to utilAPI

*/

import { USERNAME } from '../../../credentials';



// Params for searching for a city globally, will return 1 city
const getSearchParamsCityGlobally = (cityName) => {

    return {
        'name': cityName,
        'name_equals': cityName,
        'featureClass': 'P',
        'isNameRequired': 'true',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'relevance',
        'maxRows': '1',

    };

}


// Params for searching for a country, will return 1 country
const getSearchParamsCountry = (countryName) => {
    return {
        'name': countryName,
        'name_equals': countryName,
        'featureClass': 'A',
        'isNameRequired': 'true',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'relevance',
        'maxRows': '1',
    };
}


// Params for searching for most populated citites of a country specefied by name and country code. 
// The name does not need to be a perfect amtch however the country code given in ISO-3166 standard will need to match.
const getSearchParamsMostPopulatedCitiesOfCountry = (countryName, countryCode) => {

    return {
        'p': countryName,
        'country': countryCode,
        'featureClass': 'P',
        'username': USERNAME,
        'type': 'json',
        'orderby': 'population',
        'maxRows': '3',
    };
}





export { getSearchParamsCityGlobally, getSearchParamsCountry, getSearchParamsMostPopulatedCitiesOfCountry };