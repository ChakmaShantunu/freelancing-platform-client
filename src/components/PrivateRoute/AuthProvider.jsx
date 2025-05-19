import React, { createContext } from 'react';
import { ToastContainer } from 'react-toastify';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const contextValues = {

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