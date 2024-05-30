import { AppRegistry } from 'react-native';
import App from './App';
import appJson, { ExpoConfig } from './app.json'; // Import the entire JSON as an object and specify the type of appJson
import React from 'react';

AppRegistry.registerComponent((appJson as ExpoConfig).expo.name, () => App); // Access the name property
