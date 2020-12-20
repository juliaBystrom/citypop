import ERROR_MESSAGE from '../../../constants';

/*
*   Input:
*   json to check for a status field
*   onError function to call with the correct error message 
*   If the json contains no entrys or a  status code indecating no result the 
*   inputed noSearchTermFoundError will be given to onError funciton.
*
*   If a error is found the function will return false otherwise true  
*/

export default function checkStatus(json, onError, noSearchTermFoundError) {
    // valueCode will be undefined if it does not exist

    let valueCode = json.status?.value;
    if (valueCode) {
        // Value vode 19 = Using API demo acount
        // Value 10 = Credentials does not exist 
        if (valueCode === 19 || valueCode === 10) {
            onError(ERROR_MESSAGE.wrongCredentials);
            return false;
        }

        // Value code 14 = No result for search term
        if (valueCode === 14) {
            onError(noSearchTermFoundError);
            return false;
        }

    }

    if (json.totalResultsCount <= 0) {
        onError(noSearchTermFoundError);
        return false;
    }

    return true;


}
