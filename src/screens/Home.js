import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const screens = [
    'Fixtures',
    'About'
];

const Home = () => {
    const navigation = useNavigation();

    const handleNavigate = (screen) => () => navigation.navigate(screen);

    return (
        <SafeAreaView style={styles.container}>
            {screens.map((screen) => (
                <TouchableOpacity
                    key={screen}
                    onPress={handleNavigate(screen)}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{screen}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: '#c4c4c4',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#222222',
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginBottom: 20,
        width: 200
    },
    buttonText: {
        color: '#222222',
        textAlign: 'center'
    }
});

export default Home;
