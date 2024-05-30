import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Notifications: undefined;
  Settings: undefined;
  AchievementDetail: { title: string };
  ContentDetail: { title: string };
  CourseDetails: {
    course: {
      title: string;
      instructor?: string;
      duration: number;
      modules: number;
      rating: number;
      progress?: number;
      description: string;
      enrolled: boolean;
    };
  };
  Login: undefined;
  Profile: undefined;
  Registration: undefined;
  UserProfile: undefined;
};

export type ContentDetailScreenRouteProp = RouteProp<RootStackParamList, 'ContentDetail'>;
export type ContentDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContentDetail'>;

export type CourseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;
export type CourseDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetails'>;
