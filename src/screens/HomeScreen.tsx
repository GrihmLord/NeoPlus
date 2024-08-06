import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hi Marquez,</Text>
                    <Text style={styles.subHeader}>this is your homepage</Text>
                </View>
                <View style={styles.headerIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                        <Icon name="notifications-outline" size={25} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.profileIcon}>
                        <Icon name="person-outline" size={25} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.feed}>
                <View style={styles.feedItem}>
                    <Image style={styles.feedImage} source={{ uri: 'https://via.placeholder.com/300' }} />
                    <Text style={styles.feedTitle}>Market collapse during pandemic</Text>
                    <Text style={styles.feedDescription}>Lorem ipsum dolor sit amet...</Text>
                    <View style={styles.feedIcons}>
                        <Icon name="heart-outline" size={20} color="#000" />
                        <Icon name="chatbubble-outline" size={20} color="#000" style={styles.feedIcon} />
                        <Icon name="share-outline" size={20} color="#000" style={styles.feedIcon} />
                    </View>
                </View>

                <View style={styles.feedItem}>
                    <Image style={styles.feedImage} source={{ uri: 'https://via.placeholder.com/300' }} />
                    <Text style={styles.feedTitle}>Another news title</Text>
                    <Text style={styles.feedDescription}>Lorem ipsum dolor sit amet...</Text>
                    <View style={styles.feedIcons}>
                        <Icon name="heart-outline" size={20} color="#000" />
                        <Icon name="chatbubble-outline" size={20} color="#000" style={styles.feedIcon} />
                        <Icon name="share-outline" size={20} color="#000" style={styles.feedIcon} />
                    </View>
                </View>
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name="home-outline" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Icon name="notifications-outline" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Icon name="settings-outline" size={30} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="person-outline" size={30} color="#000" />
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
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderColor: '#e9ecef',
    },
});

export default HomeScreen;
