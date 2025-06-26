import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../../components/PrivateRoute/AuthProvider';
import TaskCard from '../../../components/taskcard/TaskCard';


const TotalTasks = () => {

    const { user } = useContext(AuthContext);

    const allTasks = useLoaderData();
    console.log(allTasks)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2'>
                {
                    allTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default TotalTasks;