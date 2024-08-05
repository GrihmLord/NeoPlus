import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AchievementDetailScreen from '../screens/AchievementDetailScreen';
import ContentDetailScreen from '../screens/ContentDetailScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

type Achievement = {
  name: string;
  description: string;
};

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  Settings: undefined;
  AchievementDetail: { achievement: Achievement };
  ContentDetail: { id: string };
  CourseDetails: { id: string };
  Login: undefined;
  Registration: undefined;
  UserProfile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="AchievementDetail" component={AchievementDetailScreen} />
        <Stack.Screen name="ContentDetail" component={ContentDetailScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
