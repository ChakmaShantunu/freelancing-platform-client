import React, { useState } from 'react';
import { data, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const TaskDetails = () => {
    const data = useLoaderData();
    const [singleTask, setSingleTask] = useState(data);
    const { title, category, deadline, budget, name, email, _id, bidsCount } = singleTask;

    const handleBidsCount = (id) => {
        console.log(id);
        fetch(`https://assignment-ten-grapes-server.vercel.app/tasks/bid/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    Swal.fire({
                        // position: "top-center",
                        icon: "success",
                        title: "Your have bided successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setSingleTask(prev => ({...prev, bidsCount: (prev.bidsCount || 0) + 1}));
                }
                console.log('after bidding the data', data)
            })
    }
    console.log(singleTask);
    return (
        <div className="bg-base-100 shadow-md border-2 border-gray-600 rounded-lg p-4 hover:shadow-xl/15 transition duration-300 my-12">
            <h2 className="text-xl font-bold text-base-content mb-1">You bid for {bidsCount} opportunities</h2>
            <h2 className="text-xl font-bold text-base-content mb-1">{title}</h2>
            <p className="text-sm text-base-content mb-2">Category: <span className='font-semibold'>{category}</span></p>

            <div className="text-sm text-base-content space-y-1 mb-3">
                <p><span className="font-semibold">Deadline:</span> {deadline}</p>
                <p><span className="font-semibold">Budget:</span> ${budget}</p>
                <p><span className="font-semibold">Posted by:</span> {name}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
            </div>
            <button onClick={() => handleBidsCount(_id)} className="btn btn-wide btn-outline">Bid</button>
        </div>
    );
};

export default TaskDetails;