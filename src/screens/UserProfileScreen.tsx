import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

type UserData = {
    age: string;
    financialInterests: string;
    politicalMindset: string;
    environmentalInterests: string;
    achievements: string[];
    preferences: string[];
    completedCourses: string[];
};

const UserProfileScreen: React.FC = () => {
    const [userData, setUserData] = useState<UserData>({
        age: '',
        financialInterests: '',
        politicalMindset: '',
        environmentalInterests: '',
        achievements: [],
        preferences: [],
        completedCourses: [],
    });

    const [isEditing, setIsEditing] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [tempPreference, setTempPreference] = useState('');
    const [tempAchievement, setTempAchievement] = useState('');
    const [tempCourse, setTempCourse] = useState('');

    // Function to render the editing view
    const renderEditingView = () => (
        <ScrollView>
            <TextInput
                value={userData.age}
                onChangeText={(text) => setUserData(prev => ({ ...prev, age: text }))}
                placeholder="Enter Age"
                style={styles.input}
            />
            <TextInput
                value={userData.financialInterests}
                onChangeText={(text) => setUserData(prev => ({ ...prev, financialInterests: text }))}
                placeholder="Enter Financial Interests"
                style={styles.input}
            />
            <TextInput
                value={userData.politicalMindset}
                onChangeText={(text) => setUserData(prev => ({ ...prev, politicalMindset: text }))}
                placeholder="Enter Political Mindset"
                style={styles.input}
            />
            <TextInput
                value={userData.environmentalInterests}
                onChangeText={(text) => setUserData(prev => ({ ...prev, environmentalInterests: text }))}
                placeholder="Enter Environmental Interests"
                style={styles.input}
            />
            <TextInput
                value={tempAchievement}
                onChangeText={setTempAchievement}
                placeholder="Add a new achievement"
                style={styles.input}
            />
            <Button title="Add Achievement" onPress={() => {
                setUserData(prev => ({ ...prev, achievements: [...prev.achievements, tempAchievement] }));
                setTempAchievement('');
            }} />
            <TextInput
                value={tempPreference}
                onChangeText={setTempPreference}
                placeholder="Add a new preference"
                style={styles.input}
            />
            <Button title="Add Preference" onPress={() => {
                setUserData(prev => ({ ...prev, preferences: [...prev.preferences, tempPreference] }));
                setTempPreference('');
            }} />
            <TextInput
                value={tempCourse}
                onChangeText={setTempCourse}
                placeholder="Add a completed course"
                style={styles.input}
            />
            <Button title="Add Course" onPress={() => {
                setUserData(prev => ({ ...prev, completedCourses: [...prev.completedCourses, tempCourse] }));
                setTempCourse('');
            }} />
            <Button title="Save" onPress={() => {
                setIsEditing(false);
                setFeedbackMessage('Profile updated successfully!');
                setTimeout(() => setFeedbackMessage(''), 3000); // Clear the message after 3 seconds
            }} />
        </ScrollView>
    );

    // Function to render the profile view
    const renderProfileView = () => (
        <ScrollView>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personal Information</Text>
                <Text style={styles.sectionContent}>Age: {userData.age}</Text>
                <Text style={styles.sectionContent}>Financial Interests: {userData.financialInterests}</Text>
                <Text style={styles.sectionContent}>Political Mindset: {userData.politicalMindset}</Text>
                <Text style={styles.sectionContent}>Environmental Interests: {userData.environmentalInterests}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Achievements</Text>
                {userData.achievements.map((achievement, index) => (
                    <View key={index} style={styles.listItemContainer}>
                        <Text style={styles.listItem}>{achievement}</Text>
                        <Button title="Remove" onPress={() => {
                            const newAchievements = [...userData.achievements];
                            newAchievements.splice(index, 1);
                            setUserData(prev => ({ ...prev, achievements: newAchievements }));
                        }} />
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                {userData.preferences.map((preference, index) => (
                    <View key={index} style={styles.listItemContainer}>
                        <Text style={styles.listItem}>{preference}</Text>
                        <Button title="Remove" onPress={() => {
                            const newPreferences = [...userData.preferences];
                            newPreferences.splice(index, 1);
                            setUserData(prev => ({ ...prev, preferences: newPreferences }));
                        }} />
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Completed Courses</Text>
                {userData.completedCourses.map((course, index) => (
                    <View key={index} style={styles.listItemContainer}>
                        <Text style={styles.listItem}>{course}</Text>
                        <Button title="Remove" onPress={() => {
                            const newCourses = [...userData.completedCourses];
                            newCourses.splice(index, 1);
                            setUserData(prev => ({ ...prev, completedCourses: newCourses }));
                        }} />
                    </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
            </View>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            {feedbackMessage && <Text style={styles.feedbackMessage}>{feedbackMessage}</Text>}
            {isEditing ? renderEditingView() : renderProfileView()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f4f4f4',
    },
    feedbackMessage: {
        color: 'green',
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginVertical: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#34495e',
    },
    sectionContent: {
        fontSize: 16,
        marginBottom: 5,
        color: '#34495e',
    },
    listItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    listItem: {
        padding: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flex: 1,
    },
    buttonContainer: {
        marginTop: 16,
    },
});

export default UserProfileScreen;
