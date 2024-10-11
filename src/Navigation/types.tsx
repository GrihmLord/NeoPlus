import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  Settings: undefined;
  AchievementDetail: { achievementId: string };
  ContentDetail: { contentId: string };
  CourseDetails: { courseId: string };
  Profile: undefined;
  Registration: undefined;
  UserProfile: { userId: string };
  Explore: undefined; // Add this line
};

export type ContentDetailScreenRouteProp = RouteProp<RootStackParamList, 'ContentDetail'>;
export type ContentDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContentDetail'>;

export type CourseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;
export type CourseDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetails'>;
