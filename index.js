/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import MainComponent from './screens/MainComponent';
import AppContainer from './components/Home';

AppRegistry.registerComponent(appName, () => MainComponent);
