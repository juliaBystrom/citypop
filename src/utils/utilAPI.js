/*
Create API Get request with props:
baseURL: en entry poing for the API request
data: Parameters to be added to the baseURL
onSuccess: function to be executed on successe

*/


export default function UtilAPI({ baseURL, data, onSuccess }) {

    let searchParams = new URLSearchParams(data);
    let url = encodeURI(baseURL + searchParams);
    console.log(url);

    fetch(url)
        .then((response) => { 
            console.log("Respnos: ");
            console.log(response);
            return response.json(); 
        })
        .then((responseJson) => {
            console.log(responseJson);
            let name = responseJson.geonames[0].name;
            let population = responseJson.geonames[0].population;
            console.log(name);
            console.log(population);
            onSuccess({displayCity: name, population:  population});

            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });


}