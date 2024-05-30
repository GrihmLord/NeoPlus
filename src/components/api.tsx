import React, { useState } from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import api from './path-to-your-api-file'; // Axios instance

const UpdateUserData = () => {
  const [userData, setUserData] = useState({ /* ...initial user data... */ });
  const [updateStatus, setUpdateStatus] = useState('');

  const handleInputChange = (name, value) => {
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
      {/* Render your TextInputs to modify userData */}
      {/* Example: <TextInput name="username" value={userData.username} onChange={(e) => handleInputChange('username', e.target.value)} /> */}
      <Button title="Update Data" onPress={handleUpdate} />
      {updateStatus && <Text>{updateStatus}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add your styling here
  },
});

export default UpdateUserData;

import React, { useEffect, useState } from 'react';
import { getUserData } from '../utils/api';

const SomeComponent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserData();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    // Render your component using userData
};
