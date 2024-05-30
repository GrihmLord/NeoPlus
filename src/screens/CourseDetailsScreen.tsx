import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './../Navigation/types'; // Adjust the import path as needed
import { ProgressView } from '@react-native-community/progress-view'; // Adjust if you are using different progress component

type CourseDetailsScreenRouteProp = RouteProp<RootStackParamList, 'CourseDetails'>;

type Props = {
  route: CourseDetailsScreenRouteProp;
};

const CourseDetailsScreen: React.FC<Props> = ({ route }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text>{course.instructor}</Text>
      <Text>{course.duration} hours</Text>
      <Text>{course.modules} modules</Text>
      <Text>Rating: {course.rating}⭐</Text>
      {course.progress && <ProgressView progress={course.progress} />}
      <Text>{course.description}</Text>
      <Button title={course.enrolled ? "Continue" : "Enroll Now"} onPress={() => {/* Navigate or Start Course */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CourseDetailsScreen;
