import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }


    const contextValues = {
        loading,
        handleSignIn,
        handleSignUp,
        user,
        setUser,
        handleSignOut,
        googleSignIn,
        updateUser
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                currentUser.reload().then(() => {
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    })
                    setLoading(false)
                })

            } else {
                setUser(null)
                setLoading(false)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
        <div>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AuthProvider;