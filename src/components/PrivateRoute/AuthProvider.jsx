import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../Firebase/Firebase.init';

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const handleSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleSignOut = () => {
        return signOut(auth)
        .then(result => {
            console.log('User signed out', result)
            toast('You have signed out')
        })
        .catch(error => {
            console.log('user have error', error)
        })
    }


    const contextValues = {
        loading,
        handleSignIn,
        handleSignUp,
        user,
        setUser,
        handleSignOut,
        googleSignIn
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
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
    }, [])
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