import './app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signUp = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password)
        return null
    } catch (error) {
        const messages = {
            'auth/email-already-in-use': 'Este email já está em uso',
            'auth/weak-password': 'Senha fajuta'
        }

        return messages[error.code] || 'Erro'
    }
};

//faz o cadastro com o firebase