import React from 'react';

const AddTask = () => {

    const handleTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newTask = Object.fromEntries(formData.entries());
        console.log(newTask);

        //
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add new task</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleTask}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Category</label>
                        {/* <input type="text" name='category' className="input w-full" placeholder="Enter coffee details" /> */}
                        <select name="category" className="select select-bordered" required>
                            <option disabled selected>Choose a category</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Design">Design</option>
                            <option value="Writing">Writing</option>
                            <option value="Marketing">Marketing</option>
                            <option value="QA/Testing">QA/Testing</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Description</label>
                        <input type="text" name='budget' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Deadline</label>
                        <input type="text" name='deadline' className="input w-full" placeholder="Enter coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Budget</label>
                        <input type="text" name='budget' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-black font-semibold">Email</label>
                        <input type="text" name='email' className="input w-full" placeholder="Enter coffee price" />
                    </fieldset>

                </div>

                <input type="submit" className='btn w-full mt-4' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddTask;