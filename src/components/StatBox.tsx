import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatBoxProps {
  label: string;
  value: string | number;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.value}>{value}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
});

export default StatBox;