import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import SectionTask from '../../components/SectionTask/SectionTask';
import TaskCard from '../../components/taskcard/TaskCard';
import Service from '../../components/Service/Service';

const Home = () => {

    const [deadline, setDeadline] = useState([])
    useEffect(() => {
        fetch('https://assignment-ten-grapes-server.vercel.app/deadline-tasks')
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
            <section className='my-24'>
                <div className='text-center mt-24 space-y-4'>
                    <h1 className='text-5xl font-bold'>Our Services</h1>
                    <p className='text-xl'>"We offer modern, efficient, and customized solutions to help your business stand out and grow online."</p>
                </div>
                <Service></Service>
            </section>
        </div>
    );
};

export default Home;