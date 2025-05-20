import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import SectionTask from '../../components/SectionTask/SectionTask';
import TaskCard from '../../components/taskcard/TaskCard';

const Home = () => {

    const [deadline, setDeadline] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
            .then(res => res.json())
            .then(data => {
                setDeadline(data);
            })
    }, [])
    return (
        <div>
            <Hero></Hero>
            <section className='mt-12'>
                <h2 className='text-4xl text-center font-bold mb-12'>Featured Tasks</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        deadline.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;