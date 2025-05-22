import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../components/PrivateRoute/AuthProvider';
import { data, Navigate } from 'react-router';
import TaskCard from '../../components/taskcard/TaskCard';
import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaGavel } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const PostedTask = () => {

    const { user } = useContext(AuthContext);
    if (!user || !user?.email) {
        return <Navigate to="/log-in"></Navigate>
    }

    const [myTask, setMyTask] = useState([]);
    // const [bidsCount, setBidsCount] = useState(null);


    const handleDelete = (id) => {
        console.log('deleting done', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-ten-grapes-server.vercel.app/tasks/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingTask = myTask.filter(task => task._id !== id)
                            setMyTask(remainingTask);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        console.log('after deleting the data', data)
                    })

            }
        });
    }

    useEffect(() => {
        fetch(`https://assignment-ten-grapes-server.vercel.app/posted-tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTask(data);
            })
    }, [user.email])

    

    return (
        <div>
            <div className='my-6'>
                {
                    myTask.length === 0 ?
                        (<p className='text-3xl text-center mt-12 font-bold'>No tasks found. You have not posted any tasks yet.</p>) :
                        (<div>
                            <div className="hidden lg:block overflow-x-auto">
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
                                            <th>Bids</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            myTask.map((task, index) => <tr key={task._id} className='hover:bg-gray-100 hover:text-black transition duration-300 cursor-pointer'>
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
                                                    <Link to={`/updateTask/${task._id}`}><button className="btn hover:bg-blue-200"><MdOutlineSystemUpdateAlt size={20} /></button></Link>
                                                </td>
                                                <td>
                                                    <button onClick={() => handleDelete(task._id)} className="btn hover:bg-red-200"><MdDelete size={20} /></button>
                                                </td>
                                                <td>
                                                    {task.bidsCount}
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className='lg:hidden grid gap-4 mt-5'>
                                {
                                    myTask.map((task, index) => (
                                        <div key={task._id} className="bg-base-100 p-4 rounded-lg shadow-xl/15 space-y-2">
                                            <h3 className="text-lg font-bold my-6">{task.title}</h3>
                                            <p><span className="font-semibold">Name:</span> {task.name}</p>
                                            <p><span className="font-semibold">Email:</span> {task.email}</p>
                                            <p><span className="font-semibold">Deadline:</span> {task.deadline}</p>
                                            <p><span className="font-semibold">Category:</span> {task.category}</p>
                                            <p><span className="font-semibold">Budget:</span> ${task.budget}</p>
                                            <div className="flex justify-between items-center mt-6">
                                                <button className="btn hover:bg-green-200"><FaGavel size={20} /></button>
                                                <Link to={`/updateTask/${task._id}`}>
                                                    <button className="btn hover:bg-blue-200"><MdOutlineSystemUpdateAlt size={20} /></button>
                                                </Link>
                                                <button onClick={() => handleDelete(task._id)} className="btn hover:bg-red-200"><MdDelete size={20} /></button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default PostedTask;