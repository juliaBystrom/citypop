/*
Create API Get request with props:
baseURL: en entry poing for the API request
data: Parameters to be added to the baseURL
onSuccess: function to be executed on successe
onError: function to be executed if the API request catches an error. Parameter is error message.
*/

import { ERROR_MESSAGE } from '../../shared/constants';


export default function UtilAPI({ baseURL, data, onSuccess, onError }) {
    let searchParams = new URLSearchParams(data);
    let url = encodeURI(baseURL + searchParams);

    let successeFullFetch = true;
    let jsonData = {};
    let errorMessage = '';

    fetch(url)
        .then((response) => {
            if (!response?.ok) {
                // Throws the status code of error to be caught in the catch statement
                throw response?.status;
            } else {
                return response.json();
            }
        }).then((responseJson) => {
            jsonData = responseJson;
        })
        .catch((error) => {
            successeFullFetch = false;

            // If an error is thrown it will be caught and handeled here. 
            // Depending on the error the correct error message will be set

            if (error >= 500) {
                // Handle server errors
                errorMessage = ERROR_MESSAGE.serverError;

            } else if (error >= 400) {
                // Handle client errors
                errorMessage = ERROR_MESSAGE.clientError;

            } else {
                // Handle Unknown errors
                errorMessage = ERROR_MESSAGE.unknownError;

            }

        }).finally(() => {
            // If errors were caugh while fetching the onError with correct errorMessage will be executed
            // otherwise onSuccess functionw with fetched json data
            return successeFullFetch ? onSuccess(jsonData) : onError(errorMessage);

        });


}