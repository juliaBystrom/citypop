
/*
* Reducer that handles different types of 
* actions for when the user search for a city in searchByCityScreen
*
*/

export default function searchByCityReducer(state, action) {
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
                showError: false,
            }
        }
        case 'success': {
            return {
                ...state,
                city: '',
                isLoading: false,
                displayCity: action.displayCity,
                population: action.population,
            }
        }
        case 'error': {
            return {
                ...state,
                isLoading: false,
                showError: true,
                error: action.errorMessage,
            }

        }
        default:
            return state;

    }
}