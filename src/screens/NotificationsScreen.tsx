import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProp } from '@react-navigation/native';

const notifications = [
    { id: 1, type: 'like', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { id: 2, type: 'comment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { id: 3, type: 'follow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { id: 4, type: 'like', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { id: 5, type: 'comment', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
    { id: 6, type: 'follow', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna' },
];

const NotificationItem = ({ type, text }) => {
    const getIconName = (type) => {
        switch (type) {
            case 'like':
                return 'thumbs-up-outline';
            case 'comment':
                return 'chatbubble-outline';
            case 'follow':
                return 'person-add-outline';
            default:
                return 'notifications-outline';
        }
    };

    return (
        <View style={styles.notificationItem}>
            <Icon name={getIconName(type)} size={30} color="#6c63ff" style={styles.icon} />
            <Text style={styles.notificationText}>{text}</Text>
        </View>
    );
};

type Props = {
    navigation: NavigationProp<any>;
};

const NotificationsScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Notifications</Text>
                {notifications.map(notification => (
                    <NotificationItem key={notification.id} type={notification.type} text={notification.text} />
                ))}
            </ScrollView>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    scrollView: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    icon: {
        marginRight: 16,
    },
    notificationText: {
        flex: 1,
        fontSize: 16,
        color: '#34495e',
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

export default NotificationsScreen;
