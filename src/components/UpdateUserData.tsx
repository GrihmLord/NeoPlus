import React, { useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import api from './path-to-your-api-file'; // Axios instance

const UpdateUserData = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // ...other initial user data...
  });
  const [updateStatus, setUpdateStatus] = useState('');

  const handleInputChange = (name: string, value: string) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await api.put('endpoint-for-updating-user', userData);
      if (response.status === 200) {
        console.log('User data updated successfully', response.data);
        setUpdateStatus('User data updated successfully');
      }
    } catch (error) {
      console.error('Error updating user data', error.response?.data || error.message);
      setUpdateStatus('Error updating user data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={userData.username}
        onChangeText={(value) => handleInputChange('username', value)}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={userData.email}
        onChangeText={(value) => handleInputChange('email', value)}
        style={styles.input}
      />
      {/* Add other TextInput components as needed */}
      <Button title="Update Data" onPress={handleUpdate} />
      {updateStatus && <Text>{updateStatus}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default UpdateUserData;
