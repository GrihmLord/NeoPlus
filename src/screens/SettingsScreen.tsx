import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<any>;
};

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [privacyEnabled, setPrivacyEnabled] = useState(false);
    const [safetyEnabled, setSafetyEnabled] = useState(false);
    const [subscriptionEnabled, setSubscriptionEnabled] = useState(false);

    const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);
    const togglePrivacy = () => setPrivacyEnabled(previousState => !previousState);
    const toggleSafety = () => setSafetyEnabled(previousState => !previousState);
    const toggleSubscription = () => setSubscriptionEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Notifications</Text>
                <View style={styles.settingItem}>
                    <Text>Enable Notifications</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleNotifications}
                        value={notificationsEnabled}
                    />
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Privacy</Text>
                <View style={styles.settingItem}>
                    <Text>Enable Privacy</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={privacyEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={togglePrivacy}
                        value={privacyEnabled}
                    />
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Safety</Text>
                <View style={styles.settingItem}>
                    <Text>Enable Safety</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={safetyEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSafety}
                        value={safetyEnabled}
                    />
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Subscription</Text>
                <View style={styles.settingItem}>
                    <Text>Enable Subscription</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={subscriptionEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSubscription}
                        value={subscriptionEnabled}
                    />
                </View>
            </View>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>
                <TouchableOpacity 
                    style={styles.settingItem}
                    onPress={() => navigation.navigate('UserProfile')}
                >
                    <Text>Basic Account Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text>Notification Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text>Content Filtration Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text>Help Center</Text>
                </TouchableOpacity>
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
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#34495e',
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ecf0f1',
    },
});

export default SettingsScreen;
