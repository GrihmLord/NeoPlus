// Path: src/components/UpdateUserData.js
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import api from '../utils/api';  // Adjust the path as necessary

const UpdateUserData = () => {
    // ... existing code ...
};

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
