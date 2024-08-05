import { AppRegistry } from 'react-native';
import App from './App';
import appJson from './app.json'; // Import the entire JSON file

const appName = appJson.expo.name; // Access the name property

AppRegistry.registerComponent(appName, () => App);
