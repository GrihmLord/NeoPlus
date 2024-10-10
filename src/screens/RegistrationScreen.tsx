import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/FirebaseConfig';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    navigation: NavigationProp<any>;
};

const RegistrationScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Registration Failed', (error as Error).message);
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Ionicons name="person-add-outline" size={80} color="#4F8EF7" />
                <Text style={styles.logoText}>Create Account</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={24} color="#4F8EF7" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={24} color="#4F8EF7" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={24} color="#4F8EF7" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.loginButtonText}>Already have an account? Login</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F8EF7',
        marginTop: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: '#4F8EF7',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#4F8EF7',
        fontSize: 16,
    },
});

export default RegistrationScreen;
