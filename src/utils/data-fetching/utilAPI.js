/*
Create API Get request with props:
baseURL: en entry poing for the API request
data: Parameters to be added to the baseURL
onSuccess: function to be executed on successe
onError: function to be executed if the API request catches an error. Parameter is error message.
*/

import {ERROR_MESSAGE} from '../../../constants';

export default function UtilAPI({ baseURL, data, onSuccess, onError }) {
    let searchParams = new URLSearchParams(data);
    let url = encodeURI(baseURL + searchParams);
    console.log(url);
    
    fetch(url)
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                // Throws an Error to be caught in the catch statement
                 
                return new Error(response.status);
            }
            return response.json();
        })
        .then((responseJson) => {
            console.log(responseJson);
            return onSuccess({responseJson: responseJson})
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
            console.log(error.Error);
            console.log(error);
            onError({errorMessage: errorMessage});

        });


}