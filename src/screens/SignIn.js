import React, { useState } from "react"; 
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signIn } from '../firebase/sign-in'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleSubmit = async () => {
        const result = await signIn(email, password);
        
        if (!result) {
            navigation.navigate('Home');
            return;
        }

        ToastAndroid.showWithGravity(
            result,
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder="Email"
                value={email}
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
                secureTextEntry
            />
            <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={(() => navigation.navigate('SignUp'))}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Cadastro</Text>
            </TouchableOpacity>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    container: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        borderWidth: 1,
        width: '100%',
        padding: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#c4c4c4',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#222222',
        paddingVertical: 10,
        paddingHorizontal: 25,
        width: '100%',
        marginBottom: 10
    },
    buttonText: {
        textAlign: "center"
    }
});

export default SignIn;
