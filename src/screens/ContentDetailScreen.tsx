import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './../Navigation/types'; // Adjust the import path as needed

type ContentDetailScreenRouteProp = RouteProp<RootStackParamList, 'ContentDetail'>;

type Props = {
  route: ContentDetailScreenRouteProp;
};

const ContentDetailScreen: React.FC<Props> = ({ route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.details}>Details about the content will appear here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  details: {
    fontSize: 16,
  },
});

export default ContentDetailScreen;
