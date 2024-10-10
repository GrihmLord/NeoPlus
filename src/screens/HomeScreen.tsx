import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.greeting}>Hi Marquez,</Text>
                        <Text style={styles.subHeader}>Welcome back</Text>
                    </View>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={styles.iconButton}>
                            <Ionicons name="notifications-outline" size={24} color="#4F8EF7" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconButton}>
                            <Ionicons name="person-outline" size={24} color="#4F8EF7" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.feed}>
                    {[1, 2, 3].map((item) => (
                        <View key={item} style={styles.feedItem}>
                            <Image style={styles.feedImage} source={{ uri: `https://picsum.photos/300/200?random=${item}` }} />
                            <View style={styles.feedContent}>
                                <Text style={styles.feedTitle}>Market trends during pandemic</Text>
                                <Text style={styles.feedDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                <View style={styles.feedIcons}>
                                    <TouchableOpacity style={styles.feedIconButton}>
                                        <Ionicons name="heart-outline" size={20} color="#4F8EF7" />
                                        <Text style={styles.feedIconText}>Like</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.feedIconButton}>
                                        <Ionicons name="chatbubble-outline" size={20} color="#4F8EF7" />
                                        <Text style={styles.feedIconText}>Comment</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.feedIconButton}>
                                        <Ionicons name="share-outline" size={20} color="#4F8EF7" />
                                        <Text style={styles.feedIconText}>Share</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={24} color="#4F8EF7" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Explore')}>
                    <Ionicons name="search" size={24} color="#6c757d" />
                    <Text style={styles.navButtonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Notifications')}>
                    <Ionicons name="notifications-outline" size={24} color="#6c757d" />
                    <Text style={styles.navButtonText}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person-outline" size={24} color="#6c757d" />
                    <Text style={styles.navButtonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343a40',
    },
    subHeader: {
        color: '#6c757d',
    },
    headerIcons: {
        flexDirection: 'row',
    },
    profileIcon: {
        marginLeft: 15,
    },
    feed: {
        marginBottom: 20,
    },
    feedItem: {
        marginBottom: 20,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    feedImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    feedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    feedDescription: {
        color: '#6c757d',
        marginTop: 5,
    },
    feedIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    feedIcon: {
        marginLeft: 15,
    },
    feedContent: {
        padding: 10,
    },
    feedIconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    feedIconText: {
        fontSize: 12,
        marginTop: 4,
        color: '#4F8EF7',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#e9ecef',
    },
    scrollView: {
        flex: 1,
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        color: '#4F8EF7',
        marginTop: 5,
    },
    iconButton: {
        padding: 8,
    },
});

export default HomeScreen;
