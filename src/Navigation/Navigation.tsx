import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Import your Home screen
import ProfileScreen from './ProfileScreen'; // Import your Profile screen

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Stack Navigator for navigating between screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* You can add more screens here as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
