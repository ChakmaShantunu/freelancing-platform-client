import React, { useContext } from 'react';
import { AuthContext } from '../PrivateRoute/AuthProvider';
import { useLoaderData } from 'react-router';

const UpdateTask = () => {

    const { title, category, deadline, budget, name, email } = useLoaderData();

    const { user } = useContext(AuthContext);

    const handleUpdateTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateTask = Object.fromEntries(formData.entries());
        console.log(updateTask);
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl font-bold'>Update Your Task</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateTask}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Title</label>
                        <input type="text" name='title' defaultValue={title} className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Category</label>
                        <select name="category" id="" className='select select border' required>
                            <option disabled selected>Choose a category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Design">Design</option>
                            <option value="Writing">Writing</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Description</label>
                        <textarea name="description" id="" className='textarea textarea-border w-full'></textarea>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Deadline</label>
                        <input type="date" name='deadline' className="input w-full" placeholder="Enter coffee taste" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Budget</label>
                        <input type="text" name='budget' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Name</label>
                        <input type="text" name='name' className="input w-full" defaultValue={user?.displayName} placeholder="Enter coffee details" readOnly />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Email</label>
                        <input type="email" name='email' className="input w-full" defaultValue={user?.email} placeholder="Enter coffee details" readOnly />
                    </fieldset>
                </div>
                <input type="submit" className='btn w-full mt-12' value="Update Task" />
            </form>
        </div>
    );
};

export default UpdateTask;