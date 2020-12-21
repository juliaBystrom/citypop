
/*
* Reducer that handles different types of 
* actions for when the user search for a country in searchByCountryScreen
*
*/


export default function searchByCountryReducer(state, action) {
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
                country: '',
                isLoading: false,
                displayCountry: action.displayCountry,
                cities: action.cities,
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