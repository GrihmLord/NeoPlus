import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';

const DashboardComponent = ({ user, recentCourses, recommendedCourses }) => {
    // Determine the current time to display an appropriate greeting
    const currentTime = new Date().getHours();
    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.greetingText}>{greeting}, {user.username}!</Text>
            
            <Text style={styles.sectionTitle}>Important Notifications</Text>
            {/* Render notifications here */}
            
            <Text style={styles.sectionTitle}>Recent Courses</Text>
            {/* Mapping through recentCourses to display them */}
            {recentCourses.map(course => (
                <View key={course.id} style={styles.courseContainer}>
                    <Text>{course.title}</Text>
                    <Button title="Resume Course" onPress={() => {/* Navigate to CourseScreen */}} />
                </View>
            ))}
            
            <Text style={styles.sectionTitle}>Recommended For You</Text>
            {/* Mapping through recommendedCourses to display them */}
            {recommendedCourses.map(course => (
                <View key={course.id} style={styles.courseContainer}>
                    <Text>{course.title}</Text>
                    <Button title="Start Course" onPress={() => {/* Navigate to CourseScreen */}} />
                </View>
            ))}
            
            <Text style={styles.sectionTitle}>Your Achievements</Text>
            {/* Render achievements like badges or points here */}
            
            <Text style={styles.sectionTitle}>Your Current Progress</Text>
            {/* Display progress bar or similar component here */}
            
            <Button title="View All Courses" onPress={() => {/* Navigate to All Courses Screen */}} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f4f4f4',
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    sectionTitle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    courseContainer: {
        marginTop: 10,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    }
});

export default DashboardComponent;
// //     }
// // });
// //
// // const coursePropTypes = {
// //     thumbnail: PropTypes.string,
// //     title: PropTypes.string.isRequired,
// //     instructor: PropTypes.string,

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
