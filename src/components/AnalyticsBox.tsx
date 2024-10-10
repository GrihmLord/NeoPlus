import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AnalyticsBoxProps {
  label: string;
  value: string | number;
}

const AnalyticsBox: React.FC<AnalyticsBoxProps> = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AnalyticsBox;