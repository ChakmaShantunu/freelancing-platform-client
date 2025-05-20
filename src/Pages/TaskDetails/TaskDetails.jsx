import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetails = () => {
    const singleTask = useLoaderData();
    const { title, category, deadline, budget, name, email } = singleTask;
    console.log(singleTask);
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
            <p className="text-sm text-gray-500 mb-2">Category: <span className='font-semibold'>{category}</span></p>

            <div className="text-sm text-gray-700 space-y-1 mb-3">
                <p><span className="font-semibold">Deadline:</span> {deadline}</p>
                <p><span className="font-semibold">Budget:</span> ${budget}</p>
                <p><span className="font-semibold">Posted by:</span> {name}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
            </div>
        </div>
    );
};

export default TaskDetails;