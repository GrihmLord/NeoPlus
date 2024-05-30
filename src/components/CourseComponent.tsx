import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, Button, StyleSheet, Platform, ProgressViewIOS, TouchableOpacity } from 'react-native';

const CourseComponent = ({ course }) => {
    const handleCoursePress = () => {
        // Handle course press for navigation or starting the course
    };

    return (
        <TouchableOpacity onPress={handleCoursePress} style={styles.container}>
            <Image source={{ uri: course.thumbnail || 'default-thumbnail-url' }} style={styles.thumbnail} />
            <Text style={styles.title}>{course.title}</Text>
            <Text>{course.instructor}</Text>
            <Text>{course.duration} hours</Text>
            <Text>{course.modules} modules</Text>
            <Text>Rating: {course.rating}⭐</Text>
            {course.progress && Platform.OS === 'ios' && <ProgressViewIOS progress={course.progress} />}
            <Text>{course.description}</Text>
            <Button title={course.enrolled ? "Continue" : "Enroll Now"} onPress={handleCoursePress} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    },
    thumbnail: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const coursePropTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string,
    duration: PropTypes.number,
    modules: PropTypes.number,
    rating: PropTypes.number,
    progress: PropTypes.number,
    description: PropTypes.string,
    enrolled: PropTypes.bool
};

CourseComponent.propTypes = {
    course: PropTypes.shape(coursePropTypes).isRequired
};

export default CourseComponent;

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
