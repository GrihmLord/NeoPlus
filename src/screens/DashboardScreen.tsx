import React, { useState } from 'react';
import {
    View, Text, StyleSheet, ScrollView, RefreshControl, TouchableOpacity, Platform, Button,
    ProgressBarAndroid
} from 'react-native';
import { ProgressBarAndroidProps } from '@react-native-community/progress-bar-android';
import { ProgressView } from '@react-native-community/progress-view';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

type Props = {
    navigation: NavigationScreenProp<NavigationState>;
};

type Content = {
    id: number;
    title: string;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
    const [userData, setUserData] = useState({
        name: 'John Doe',
        progress: 0.5,
        achievements: ['Achievement 1', 'Achievement 2'],
    });
    const [refreshing, setRefreshing] = useState(false);
    const [contentRecommendations, setContentRecommendations] = useState([
        { id: 1, title: 'Content 1' },
        { id: 2, title: 'Content 2' },
    ]);

    const onRecommendationClick = (content: Content) => {
        navigation.navigate('ContentDetail', { title: content.title });
    };

    const onRefresh = () => {
        console.log('Refreshed!');
    };

    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.userInfo}>
                <Text style={styles.title}>Your Progress</Text>
                <Text>Name: {userData.name}</Text>
                {Platform.OS === 'android' ? (
                    <ProgressBarAndroid styleAttr="Horizontal" progress={userData.progress} indeterminate={false} />
                ) : (
                    <ProgressView progress={userData.progress} />
                )}

                <View style={styles.achievements}>
                    <Text style={styles.subtitle}>Your Achievements:</Text>
                    {userData.achievements.map((achievement, index) => (
                        <Text key={index}>{achievement}</Text>
                    ))}
                </View>
            </View>

            <View style={styles.recommendations}>
                <Text style={styles.title}>Recommended Content</Text>
                {contentRecommendations.map((content) => (
                    <TouchableOpacity key={content.id} onPress={() => onRecommendationClick(content)}>
                        <Text style={styles.contentTitle}>{content.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Button
                title="Go to Course Details"
                onPress={() => navigation.navigate('CourseDetails')}
            />

            <Button
                title="View Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    userInfo: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    achievements: {
        marginTop: 10,
    },
    recommendations: {
        marginTop: 20,
        padding: 20,
    },
    contentTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default DashboardScreen;
