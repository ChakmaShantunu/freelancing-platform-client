import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loader from '../../Pages/Loader/Loader';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>
    }

    if (!user || !user?.email) {
        return <Navigate state={location?.pathname} to="/log-in"></Navigate>
    }
    return children
};

export default PrivateRoute;