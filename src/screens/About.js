import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const About = () => (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cristhian Helber Appi</Text>
        <Text style={styles.description}>
            Aplicativo para as datas dos jogos da copa do mundo 2022
        </Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        padding: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 15
    },
    description: {
        textAlign: 'center',
        fontSize: 18
    }
})

export default About;
