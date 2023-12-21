/**
 * @format
 */
import { LogBox } from 'react-native';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    //Alert.alert('CHECK AND REMOVE', JSON.stringify(remoteMessage));
});


AppRegistry.registerComponent(appName, () => App);

//below code disables warn on simulators
// LogBox.ignoreLogs(['Warning: ...']);
// console.warn = () => { }
// console.error = () => { }