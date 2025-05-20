import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { data, Navigate } from 'react-router';
import TaskCard from '../../components/taskcard/TaskCard';
import MyPostedTask from '../../components/myPostedTask/MyPostedTask';
import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaGavel } from "react-icons/fa";

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
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>
                                            No.
                                        </th>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th>Deadline</th>
                                        <th>Position</th>
                                        <th>Budget</th>
                                        <th>Bid</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myTask.map((task, index) => <tr key={task._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <div className="font-bold">{task.name}</div>
                                                        <div className="text-sm opacity-50">{task.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {task.title}
                                                <br />
                                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                            </td>
                                            <td>
                                                {task.deadline}
                                                <br />
                                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                            </td>
                                            <td>{task.category}</td>
                                            <td>
                                                ${task.budget}
                                            </td>
                                            <td>
                                                <button className="btn hover:bg-green-200"><FaGavel size={20} /></button>
                                            </td>
                                            <td>
                                                <button className="btn hover:bg-blue-200"><MdOutlineSystemUpdateAlt size={20} /></button>
                                            </td>
                                            <td>
                                                <button className="btn hover:bg-red-200"><MdDelete size={20} /></button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>

        </div>
    );
};

export default PostedTask;