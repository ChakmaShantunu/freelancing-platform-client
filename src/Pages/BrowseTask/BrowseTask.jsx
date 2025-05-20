import React, { useContext } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { Navigate, useLoaderData } from 'react-router';
import TaskCard from '../../components/taskcard/TaskCard';

const BrowseTask = () => {

    const { user } = useContext(AuthContext);
    if (!user || !user?.email) {
        return <Navigate to="/log-in"></Navigate>
    }

    const allTasks = useLoaderData();
    console.log(allTasks);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    allTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;