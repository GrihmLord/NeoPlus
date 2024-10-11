import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../Navigation/types';

type ExploreScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Explore'>;

interface ExploreItem {
    id: number;
    title: string;
    category: string;
    image: string;
    author: string;
    likes: number;
}

const ExploreScreen: React.FC = () => {
    const navigation = useNavigation<ExploreScreenNavigationProp>();
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [exploreItems, setExploreItems] = useState<ExploreItem[]>([]);
    const [categories, setCategories] = useState(['All', 'Technology', 'Science', 'Business', 'Health', 'Arts']);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        fetchExploreItems();
    }, []);

    const fetchExploreItems = () => {
        // Simulating API call
        setTimeout(() => {
            setExploreItems([
                { id: 1, title: 'The Future of AI', category: 'Technology', image: 'https://picsum.photos/300/200?random=1', author: 'John Doe', likes: 120 },
                { id: 2, title: 'Space Exploration in 2023', category: 'Science', image: 'https://picsum.photos/300/200?random=2', author: 'Jane Smith', likes: 95 },
                { id: 3, title: 'Global Economic Trends', category: 'Business', image: 'https://picsum.photos/300/200?random=3', author: 'Mike Johnson', likes: 78 },
                { id: 4, title: 'Breakthroughs in Medicine', category: 'Health', image: 'https://picsum.photos/300/200?random=4', author: 'Sarah Brown', likes: 110 },
                { id: 5, title: 'Modern Art Movements', category: 'Arts', image: 'https://picsum.photos/300/200?random=5', author: 'Emily Davis', likes: 86 },
                { id: 6, title: 'Cybersecurity Challenges', category: 'Technology', image: 'https://picsum.photos/300/200?random=6', author: 'Alex Wilson', likes: 92 },
            ]);
        }, 1000);
    };

    const onRefresh = () => {
        setRefreshing(true);
        fetchExploreItems();
        setRefreshing(false);
    };

    const filteredItems = exploreItems.filter(item => 
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        (item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         item.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Explore</Text>
                </View>

                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#6c757d" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search articles, authors..."
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                    {categories.map((category, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.categoryButton,
                                selectedCategory === category && styles.selectedCategoryButton
                            ]}
                            onPress={() => setSelectedCategory(category)}
                        >
                            <Text style={[
                                styles.categoryButtonText,
                                selectedCategory === category && styles.selectedCategoryButtonText
                            ]}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.exploreGrid}>
                    {filteredItems.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.exploreItem}>
                            <Image style={styles.exploreImage} source={{ uri: item.image }} />
                            <View style={styles.exploreContent}>
                                <Text style={styles.exploreCategory}>{item.category}</Text>
                                <Text style={styles.exploreTitle}>{item.title}</Text>
                                <Text style={styles.exploreAuthor}>By {item.author}</Text>
                                <View style={styles.exploreLikes}>
                                    <Ionicons name="heart" size={16} color="#4F8EF7" />
                                    <Text style={styles.exploreLikesText}>{item.likes}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home-outline" size={24} color="#6c757d" />
                    <Text style={styles.navButtonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Ionicons name="search" size={24} color="#4F8EF7" />
                    <Text style={[styles.navButtonText, styles.activeNavButtonText]}>Explore</Text>
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
        backgroundColor: '#f8f9fa',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        padding: 20,
        backgroundColor: '#ffffff',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343a40',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        margin: 20,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    categoriesContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    categoryButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#e9ecef',
    },
    selectedCategoryButton: {
        backgroundColor: '#4F8EF7',
    },
    categoryButtonText: {
        color: '#495057',
        fontWeight: 'bold',
    },
    selectedCategoryButtonText: {
        color: '#ffffff',
    },
    exploreGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    exploreItem: {
        width: '48%',
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 3,
    },
    exploreImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    exploreContent: {
        padding: 10,
    },
    exploreCategory: {
        color: '#4F8EF7',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    exploreTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    exploreAuthor: {
        color: '#6c757d',
        fontSize: 12,
        marginBottom: 5
    },
    exploreLikes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    exploreLikesText: {
        color: '#4F8EF7',
        fontSize: 12,
        marginLeft: 5
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navButtonText: {
        fontSize: 12,
        color: '#6c757d',
    },
    activeNavButtonText: {
        color: '#4F8EF7', // or any color you want for the active state
    },
});

export default ExploreScreen;