import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import SectionTask from '../../components/SectionTask/SectionTask';
import TaskCard from '../../components/taskcard/TaskCard';
import Service from '../../components/Service/Service';
import About from '../../components/About/About';
import Updates from '../../components/Updates/Updates';
import GroovyWalk from '../../components/lottie/GroovyWalk';

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


            <section className='my-24'>
                <div className='text-center mt-24 space-y-4'>
                    <h1 className='text-5xl font-bold'>Get Our Updates</h1>
                    <p className='text-xl'>"We offer modern, efficient, and customized solutions to help your business stand out and grow online."</p>
                </div>
                <Updates></Updates>
            </section>

            <section className='my-24'>
                <div className='text-center mt-24 space-y-8'>
                    <h1 className='text-5xl font-bold mt-6'>About</h1>
                    <p className='text-xl'>We're a passionate and detail-oriented front-end developer and video editor with a focus on creating clean, user-friendly, and performance-optimized digital experiences.

                        With a strong foundation in HTML, CSS, JavaScript, React, and TailwindCSS, we build responsive websites that look great on any device. we also offer professional video editing services that bring your content to life with smooth transitions, motion graphics, and storytelling techniques.

                        My goal is simple — to help businesses and individuals stand out online through beautiful design, intuitive user interfaces, and engaging visuals. I value clear communication, on-time delivery, and building long-term relationships with clients.</p>
                </div>
                <About></About>
            </section>
        </div>
    );
};

export default Home;