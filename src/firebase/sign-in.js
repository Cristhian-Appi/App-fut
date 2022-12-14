import './app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const signIn = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
        return null
    } catch (error) {
        const messages = {
            'auth/user-not-found': 'Usuário não encontrado',
            'auth/wrong-password': 'Senha incorreta'
        }

        return messages[error.code] || 'Erro'
    }
};

// faz o login com o firebase