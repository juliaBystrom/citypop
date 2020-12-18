/*
Create API Get request with props:
baseURL: en entry poing for the API request
data: Parameters to be added to the baseURL
onSuccess: function to be executed on successe
onError: function to be executed if the API request catches an error. Parameter is error message.
*/

import {ERROR_MESSAGE} from './../../constants';

export default function UtilAPI({ baseURL, data, onSuccess, onError }) {
    let searchParams = new URLSearchParams(data);
    let url = encodeURI(baseURL + searchParams);
    console.log(url);

    fetch(url)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                // Throws an Error to be caught in the catch statement
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((responseJson) => {
            console.log(responseJson);
            let name = responseJson.geonames[0].name;
            let population = responseJson.geonames[0].population;
            onSuccess({ cityName: name, populationOfCity: population });

            return responseJson;
        })
        .catch((error) => {
            // If an error is thrown it will be caught and handeled here. 
            // Depending on error type it will execute the onError funciton with appropriate error message  
            let errorMessage = '';

            if (error.Error >= 500) {
                // Handle server errors
                errorMessage = ERROR_MESSAGE.serverError;

            } else if (error.Error >= 400) {
                // Handle client errors
                errorMessage = ERROR_MESSAGE.clientError;

            } else {
                // Handle Unknown errors
                errorMessage = ERROR_MESSAGE.unknownError;

            }
            // Log error
            console.log(errorMessage);
            onError({errorMessage: errorMessage});

        });


}