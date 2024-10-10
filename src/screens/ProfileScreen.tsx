import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, RefreshControl, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { createApi } from 'unsplash-js';

// Initialize Unsplash API (replace 'YOUR_ACCESS_KEY' with your actual Unsplash access key)
const unsplash = createApi({
  accessKey: 'YOUR_ACCESS_KEY'
});

type Props = {
    navigation: NavigationProp<any>;
};

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
    const [refreshing, setRefreshing] = useState(false);
    const [galleryItems, setGalleryItems] = useState([
        { id: 1, title: 'AI Ethics in Practice', type: 'Article', image: '' },
        { id: 2, title: 'Quantum Computing: A New Era', type: 'Paper', image: '' },
        { id: 3, title: 'Climate Change: Global Impact', type: 'Article', image: '' },
        { id: 4, title: 'Neural Networks Optimization', type: 'Paper', image: '' },
        { id: 5, title: 'Renewable Energy Solutions', type: 'Article', image: '' },
        { id: 6, title: 'Blockchain in Healthcare', type: 'Paper', image: '' },
    ]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        const updatedItems = await Promise.all(galleryItems.map(async (item) => {
            const result = await unsplash.photos.getRandom({ query: item.title, orientation: 'landscape' });
            const response = Array.isArray(result.response) ? result.response[0] : result.response;
            return { ...item, image: response?.urls?.small || '' };
        }));
        setGalleryItems(updatedItems);
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchImages().then(() => setRefreshing(false));
    }, []);

    return (
        <ScrollView 
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View style={styles.header}>
                <Image 
                    style={styles.profileImage}
                    source={{ uri: 'https://example.com/profile-image.jpg' }}
                />
                <Text style={styles.name}>Joaquin Marquez</Text>
                <Text style={styles.role}>Creative Director</Text>
                <View style={styles.ratingContainer}>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.rating}>4.7/5.0</Text>
                </View>
                <Text style={styles.bio}>
                    Passionate creative director with a flair for innovative design solutions.
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
                    source={{ uri: 'https://example.com/alias-image.jpg' }}
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

            <View style={styles.publicationsSection}>
                <Text style={styles.sectionTitle}>MY PUBLICATIONS</Text>
                <View style={styles.publicationsGrid}>
                    {galleryItems.map((item) => (
                        <View key={item.id} style={styles.publicationItem}>
                            <Image 
                                style={styles.publicationImage} 
                                source={{ uri: item.image || `https://picsum.photos/300/200?random=${item.id}` }} 
                            />
                            <View style={styles.publicationContent}>
                                <Text style={styles.publicationTitle}>{item.title}</Text>
                                <Text style={styles.publicationType}>{item.type}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.settingsSection}>
                <Text style={styles.settingsTitle}>ACCOUNT SETTINGS</Text>
                {['Basic account settings', 'Privacy Settings', 'Safety Setting', 'Subscription Settings', 
                'Notifications Settings', 'Content Filtration Settings', 'Preferences', 'Help Center'].map((item, index) => (
                    <TouchableOpacity key={`setting-${index}`} style={styles.settingsItem}>
                        <Text style={styles.settingsText}>{item}</Text>
                        <Icon name="chevron-forward" size={20} color="#34495e" />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity 
                style={styles.editProfileButton}
                onPress={() => navigation.navigate('EditProfile')}
            >
                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </TouchableOpacity>
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
    publicationsSection: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#34495e',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    publicationsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    publicationItem: {
        width: (Dimensions.get('window').width - 60) / 2,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    publicationImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    publicationContent: {
        padding: 10,
    },
    publicationTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#34495e',
        marginBottom: 5,
    },
    publicationType: {
        fontSize: 12,
        color: '#7f8c8d',
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ecf0f1',
    },
    settingsText: {
        fontSize: 16,
        color: '#34495e',
    },
    editProfileButton: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
    },
    editProfileButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProfileScreen;