import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            {/* Placeholder for a list of notifications */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});

export default NotificationsScreen;

// Path: src/screens/NotificationsScreen.js