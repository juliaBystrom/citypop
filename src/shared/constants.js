const BASEURL = 'http://api.geonames.org/searchJSON?';
const ERROR_MESSAGE = {
    serverError: 'Internal server error while loading data, please waint and try again later.',
    clientError: 'Bad request error, please contact app administraton',
    unknownError: 'Unknown error, please waint and try again later.',
    wrongCredentials: 'Wrong credentials, please contact app administraton',
    noCityFound: 'Found no city with that name',
    noCountryFound: 'Found no country with that name',
    noCitiesOfCountryFound: 'Found no cities to searched for country, try another',
    notValidInputChar: 'Search term can only contian alphanumeric characters',
    notValidInputLength: 'Search term need to contan at least one character',
    noSearchResult: 'Search term gave no result, try another one',
};
const ICONS = {
    search: "search",
}

export { BASEURL, ERROR_MESSAGE, ICONS }