import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from '../../Firebase/Firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const contextValues = {
        loading,
        handleSignIn
    }
    return (
        <div>
            <AuthContext value={contextValues}>
                {children}
            </AuthContext>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AuthProvider;