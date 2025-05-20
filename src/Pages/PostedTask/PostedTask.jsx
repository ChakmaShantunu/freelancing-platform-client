import React, { useContext } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { Navigate } from 'react-router';

const PostedTask = () => {

    const { user } = useContext(AuthContext);
    if (!user || !user?.email) {
        return <Navigate to="/log-in"></Navigate>
    }
    return (
        <div>
            <h2>this is posted task</h2>
        </div>
    );
};

export default PostedTask;