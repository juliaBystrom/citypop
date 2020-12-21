# City Pop


## Installations needed for development

Read more about how to dowload and setup the following for your Target OS and Development OS: [React native enviroment-setup](https://reactnative.dev/docs/environment-setup)

### Develop for Android

1. Node
2. Java Development Kit
3. Android development environment
    * Android Studio
    * Android SDK
    * Configure ANDROID_HOME environment variable

### Develop for IOS 
Mac is required to build projects with native code for iOS
 1. Node
 2. Xcode
 3. CocoaPod
 4. Xcode Command Line Tools



## Run project

###  Clone this repo
```
git clone git@github.com:juliaBystrom/citypop.git
```

### Install Dependencies
```
npm install
```

### Link assets react-native-vector-icons 
```
react-native link react-native-vector-icons

```

### For iOS, after installing Cocoapods run command in root 

```
cd ios && pod install

```


### Change username for geonames API

1. In the terminal be in the root folder of this project
2. Change [Your username] below to your username for the geonames API
3. Run

```
echo "export const USERNAME = '[Your username]';" > credentials.js 
```

You can also in the root folder of cityPop create a file called credentials.js with:
export const USERNAME = '[Your username]';

This file will be ignonerd by git, to undone this change the (./.gitignore) file


### Run on android 
```
npx react-native run-android
```

### Run on ios 
```
npx react-native run-ios
```

## Customizing Color Scheme 

In (./src/shared/colorConstants.js) you find the COLOR constants

```
export default COLOR = {
    PRIMARY_BACKGROUND: '#CFDBD5',
    SECONDARY_BACKGROUND: '#E8EDDF',
    TEXT: '#242423',
    ACCENT: '#087E8B',
    ALERT: '#FE4A49',
    FOCUS: '#B4DC7F',
};
```

The colors are used for the following:
### `PRIMARY_BACKGROUND` 
* Background for application
* Background for pressed buttons

### `SECONDARY_BACKGROUND` : 
* Background for buttons
* Background for text input
* Population display

### `TEXT`
* Text color

### `ACCENT`
* Border color for
    * Button
    * Text input
    * Population display
* Title color

### `ALERT`
* Background color for errors

### `FOCUS`
* Border for Text input on focus
* Color for ActivityIndicator displayed while fetching data. Until issue is resolved the color is manually inputed in [`searchByCoutryScreen.js`](./src/screens/searchByCoutryScreen.js) and [`searchByCityScreen.js`](./src/screens/searchByCityScreen.js)



## Project Structure
Overall comments about structure of project

### [src](./src)
This folder contains: components, routes, screens, shared and utils

```
src
 ┣ components
 ┃ ┣ basicContainer.js
 ┃ ┣ displayError.js
 ┃ ┣ iconButton.js
 ┃ ┣ index.js
 ┃ ┣ populationDisplay.js
 ┃ ┣ pressableCity.js
 ┃ ┣ screenTitle.js
 ┃ ┣ standardButton.js
 ┃ ┗ userStringInput.js
 ┣ routes
 ┃ ┗ homeStack.js
 ┣ screens
 ┃ ┣ citiesOfCountryScreen.js
 ┃ ┣ cityInhabitantsScreen.js
 ┃ ┣ homeScreen.js
 ┃ ┣ searchByCityScreen.js
 ┃ ┗ searchByCoutryScreen.js
 ┣ shared
 ┃ ┣ colorConstants.js
 ┃ ┣ constants.js
 ┃ ┣ index.js
 ┃ ┗ sharedStyles.js
 ┗ utils
 ┃ ┣ data-fetching
 ┃ ┃ ┣ apiParams.js
 ┃ ┃ ┣ checkStatus.js
 ┃ ┃ ┗ utilAPI.js
 ┃ ┣ reducers
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ searchByCityReducer.js
 ┃ ┃ ┗ searchByCountryReducer.js
 ┃ ┣ useDidMount.js
 ┃ ┗ validInput.js
 ```

 ### [App.js](./App.js) and [index.js](./index.js)
 Entry point for application

