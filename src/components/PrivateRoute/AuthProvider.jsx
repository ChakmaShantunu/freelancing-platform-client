import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { auth } from '../../Firebase/Firebase.init';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const contextValues = {
        loading,
        handleSignIn,
        handleSignUp
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = currentUser.uid;
                console.log(uid);
                // ...
            } else {
                // User is signed out
                // ...
            }
        })
        return () => {
            unSubscribe();
        }
    })
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