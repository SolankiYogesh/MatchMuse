/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';
import {PlaybackService} from './src/Services/PlayerServices';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
