import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock API call (replace with actual API call)
const fetchNotifications = () => 
  new Promise<Notification[]>((resolve) => 
    setTimeout(() => resolve(mockNotifications), 1000)
  );

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'mention' | 'message' | 'friend_request' | 'post';
  text: string;
  timestamp: number;
  read: boolean;
}

const mockNotifications: Notification[] = [
  { id: 1, type: 'like', text: 'John Doe liked your post', timestamp: Date.now(), read: false },
  { id: 2, type: 'comment', text: 'Jane Smith commented on your photo', timestamp: Date.now() - 86400000, read: true },
  { id: 3, type: 'follow', text: 'Alex Johnson started following you', timestamp: Date.now() - 172800000, read: false },
  { id: 4, type: 'mention', text: 'Sarah Brown mentioned you in a comment', timestamp: Date.now() - 3600000, read: false },
  { id: 5, type: 'message', text: 'You have a new message from Mike Wilson', timestamp: Date.now() - 7200000, read: true },
  { id: 6, type: 'friend_request', text: 'Emily Davis sent you a friend request', timestamp: Date.now() - 259200000, read: false },
  { id: 7, type: 'post', text: 'Your friend Tom White shared a new post', timestamp: Date.now() - 432000000, read: true },
];

const formatTimestamp = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};

const NotificationItem: React.FC<{ notification: Notification; onPress: () => void }> = React.memo(({ notification, onPress }) => {
  const getIconName = (type: Notification['type']) => {
    switch (type) {
      case 'like': return 'heart';
      case 'comment': return 'chatbubble';
      case 'follow': return 'person-add';
      case 'mention': return 'at';
      case 'message': return 'mail';
      case 'friend_request': return 'people';
      case 'post': return 'newspaper';
      default: return 'notifications';
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.notificationItem, !notification.read && styles.unreadNotification]} 
      onPress={onPress}
    >
      <Icon name={getIconName(notification.type)} size={24} color="#6c63ff" style={styles.icon} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>{notification.text}</Text>
        <Text style={styles.timestamp}>{formatTimestamp(notification.timestamp)}</Text>
      </View>
      {!notification.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
});

const NotificationsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadNotifications = async () => {
    setLoading(true);
    const fetchedNotifications = await fetchNotifications();
    setNotifications(fetchedNotifications);
    setLoading(false);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await loadNotifications();
    setRefreshing(false);
  };

  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const renderItem = ({ item }: { item: Notification }) => (
    <NotificationItem 
      notification={item} 
      onPress={() => markAsRead(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
        <TouchableOpacity onPress={() => setNotifications([])}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#6c63ff" style={styles.loader} />
      ) : (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#6c63ff']} />
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>No notifications yet</Text>
          }
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
  clearAll: {
    color: '#6c63ff',
    fontSize: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  unreadNotification: {
    backgroundColor: '#e7f5ff',
  },
  icon: {
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#343a40',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#868e96',
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#6c63ff',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 16,
    color: '#868e96',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;