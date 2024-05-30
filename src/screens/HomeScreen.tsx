// Path: src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Welcome to Our App!</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Features</Text>
                {/* List your features or items here */}
                <Text style={styles.item}>Feature 1</Text>
                <Text style={styles.item}>Feature 2</Text>
                <Text style={styles.item}>Feature 3</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title="Go to Profile" 
                    onPress={() => navigation.navigate('Profile')} 
                    color="#007bff"
                />
                <Button 
                    title="Explore More" 
                    onPress={() => {/* navigation logic */}} 
                    color="#28a745"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#343a40',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#343a40',
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});

export default HomeScreen;
