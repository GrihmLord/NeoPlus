import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<any>;
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.profileImage}
                    source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual profile image URL
                />
                <Text style={styles.name}>Joaquin Marquez</Text>
                <Text style={styles.role}>Creative Director</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.rating}>4.7/5.0</Text>
                </View>
                <Text style={styles.bio}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                </Text>
                <View style={styles.followContainer}>
                    <Text style={styles.followCount}>2,564</Text>
                    <Text style={styles.followLabel}>FOLLOWERS</Text>
                    <Text style={styles.followCount}>784</Text>
                    <Text style={styles.followLabel}>FOLLOWING</Text>
                </View>
            </View>

            <View style={styles.aliasSection}>
                <Text style={styles.aliasTitle}>ALIAS</Text>
                <Image 
                    style={styles.aliasImage}
                    source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual alias image URL
                />
                <Text style={styles.aliasHandle}>@alansamson</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.rating}>4.7/5.0</Text>
                </View>
                <View style={styles.followContainer}>
                    <Text style={styles.followCount}>2,564</Text>
                    <Text style={styles.followLabel}>FOLLOWERS</Text>
                    <Text style={styles.followCount}>784</Text>
                    <Text style={styles.followLabel}>FOLLOWING</Text>
                </View>
            </View>

            <View style={styles.walletSection}>
                <Text style={styles.walletTitle}>WALLET</Text>
                <Text style={styles.credits}>13</Text>
                <Text style={styles.creditsLabel}>AVAILABLE CREDITS</Text>
                <View style={styles.walletButtons}>
                    <TouchableOpacity style={styles.walletButton}>
                        <Text style={styles.walletButtonText}>BOOST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.walletButton}>
                        <Text style={styles.walletButtonText}>BUY CREDITS</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.analyticsSection}>
                <Text style={styles.analyticsTitle}>ANALYTICS</Text>
                <View style={styles.analyticsRow}>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>PUBLIC</Text>
                        <Text style={styles.analyticsValue}>4.7 <Text style={styles.analyticsChange}>+0.3</Text></Text>
                        <Text style={styles.analyticsDetail}>RANKING</Text>
                    </View>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>+12</Text>
                        <Text style={styles.analyticsDetail}>FOLLOWERS</Text>
                    </View>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>+457</Text>
                        <Text style={styles.analyticsDetail}>LIKES</Text>
                    </View>
                </View>
                <View style={styles.analyticsRow}>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>ALIAS</Text>
                        <Text style={styles.analyticsValue}>4.7 <Text style={styles.analyticsChange}>+0.3</Text></Text>
                        <Text style={styles.analyticsDetail}>RANKING</Text>
                    </View>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>+12</Text>
                        <Text style={styles.analyticsDetail}>FOLLOWERS</Text>
                    </View>
                    <View style={styles.analyticsBox}>
                        <Text style={styles.analyticsLabel}>+457</Text>
                        <Text style={styles.analyticsDetail}>LIKES</Text>
                    </View>
                </View>
            </View>

            <View style={styles.settingsSection}>
                <Text style={styles.settingsTitle}>ACCOUNT SETTINGS</Text>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Basic account settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Privacy Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Safety Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Subscription Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Notifications Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Content Filtration Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Preferences</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsItem}>
                    <Text style={styles.settingsText}>Help Center</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        backgroundColor: '#8e44ad',
        padding: 20,
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    role: {
        fontSize: 16,
        color: '#fff',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    rating: {
        marginLeft: 5,
        fontSize: 16,
        color: '#fff',
    },
    bio: {
        fontSize: 14,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    },
    followContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
    followCount: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    followLabel: {
        fontSize: 14,
        color: '#fff',
    },
    aliasSection: {
        backgroundColor: '#34495e',
        padding: 20,
        alignItems: 'center',
    },
    aliasTitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 10,
    },
    aliasImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    aliasHandle: {
        fontSize: 18,
        color: '#fff',
    },
    walletSection: {
        backgroundColor: '#ecf0f1',
        padding: 20,
        alignItems: 'center',
    },
    walletTitle: {
        fontSize: 18,
        color: '#34495e',
        marginBottom: 10,
    },
    credits: {
        fontSize: 24,
        color: '#34495e',
        fontWeight: 'bold',
    },
    creditsLabel: {
        fontSize: 14,
        color: '#34495e',
        marginBottom: 10,
    },
    walletButtons: {
        flexDirection: 'row',
    },
    walletButton: {
        backgroundColor: '#8e44ad',
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    walletButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    analyticsSection: {
        padding: 20,
    },
    analyticsTitle: {
        fontSize: 18,
        color: '#34495e',
        marginBottom: 10,
    },
    analyticsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    analyticsBox: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: '30%',
    },
    analyticsLabel: {
        fontSize: 14,
        color: '#34495e',
    },
    analyticsValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495e',
    },
    analyticsChange: {
        fontSize: 14,
        color: '#27ae60',
    },
    analyticsDetail: {
        fontSize: 12,
        color: '#34495e',
    },
    settingsSection: {
        padding: 20,
    },
    settingsTitle: {
        fontSize: 18,
        color: '#34495e',
        marginBottom: 10,
    },
    settingsItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ecf0f1',
    },
    settingsText: {
        fontSize: 16,
        color: '#34495e',
    },
});

export default ProfileScreen;
