import React, { useContext } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { Navigate } from 'react-router';

const BrowseTask = () => {

    const { user } = useContext(AuthContext);
    if (!user || !user?.email) {
        return <Navigate to="/log-in"></Navigate>
    }
    return (
        <div>
            <h2>this is browse task</h2>
        </div>
    );
};

export default BrowseTask;