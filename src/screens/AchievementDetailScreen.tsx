import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Achievement = {
    name: string;
    description: string;
};

type Props = {
    route: {
        params: {
            achievement: Achievement;
        };
    };
};

const AchievementDetailScreen: React.FC<Props> = ({ route }) => {
    const { achievement } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{achievement.name}</Text>
            <Text style={styles.description}>{achievement.description}</Text>
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
    },
    description: {
        marginTop: 16,
        fontSize: 16,
    },
});

export default AchievementDetailScreen;
