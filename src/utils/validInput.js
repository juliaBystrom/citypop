/*
*  Validates input string
*  Returns true if it contiains no non-alphanumeric characters
*  Checks the swedish alphabet
*/


export default function validInput(input){
    return input.search('[^a-öA-Ö0-9_]') === -1 ? true : false;
}