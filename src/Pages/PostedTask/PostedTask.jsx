import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { data, Navigate } from 'react-router';
import TaskCard from '../../components/taskcard/TaskCard';
import MyPostedTask from '../../components/myPostedTask/MyPostedTask';

const PostedTask = () => {

    const { user } = useContext(AuthContext);
    if (!user || !user?.email) {
        return <Navigate to="/log-in"></Navigate>
    }

    const [myTask, setMyTask] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/posted-tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTask(data);
            })
    }, [user.email])
    return (
        <div>
            <div>
                {
                    myTask.length === 0 ?
                        (<p className='text-3xl text-center mt-12 font-bold'>No tasks found. You have not posted any tasks yet.</p>) :
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                            {
                                myTask.map(task => <MyPostedTask key={task._id} task={task}></MyPostedTask>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default PostedTask;