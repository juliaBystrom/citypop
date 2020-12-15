import 'react-native-gesture-handler'; // Inporting react-native-gesture-handler should stay in the top of the entry file.
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
