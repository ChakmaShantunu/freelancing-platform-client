import React from 'react';
import { Link } from 'react-router';

const TaskCard = ({ task }) => {

    const { _id, title, budget, category, email, name, deadline } = task;
    return (
        <div className="bg-white shadow-md rounded-lg p-4 border-1 border-amber-100 hover:shadow-lg transition duration-300 hover:scale-105">
            <h2 className="text-xl font-bold text-black mb-1">{title}</h2>
            <p className="text-sm text-base-content mb-2">{category}</p>

            <div className="text-sm text-black space-y-1 mb-3">
                <p><span className="font-semibold">Deadline:</span> {deadline}</p>
                <p><span className="font-semibold">Budget:</span> ${budget}</p>
                <p><span className="font-semibold">Posted by:</span> {name}</p>
                <p><span className="font-semibold">Email:</span> {email}</p>
            </div>

            <Link to={`/tasks/${_id}`} className="btn btn-sm btn-primary mt-2">
                See Details
            </Link>
            
        </div>
    );
};

export default TaskCard;