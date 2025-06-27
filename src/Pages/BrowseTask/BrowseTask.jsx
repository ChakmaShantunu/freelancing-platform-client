import React, { useContext, useState } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { Navigate, useLoaderData } from 'react-router';
import TaskCard from '../../components/taskcard/TaskCard';

const BrowseTask = () => {

    const { user } = useContext(AuthContext);
    // if (!user || !user?.email) {
    //     return <Navigate to="/log-in"></Navigate>
    // }

    const allTasks = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
    }

    const filteredTasks = selectedCategory === 'all' ? allTasks : allTasks.filter(task => task.category === selectedCategory)
    console.log(filteredTasks);

    return (
        <div>
            <div className='mt-12'>
                <select defaultValue="" onChange={handleCategoryChange} className="select">
                    <option value="all">All</option>
                    <option>Web Development</option>
                    <option>Design</option>
                    <option>Writing</option>
                    <option>Marketing</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
                {
                    filteredTasks.length > 0 ? filteredTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>) : (<h3 className="text-3xl">No Data Found</h3>)
                }
                

            </div>
        </div>
    );
};

export default BrowseTask;