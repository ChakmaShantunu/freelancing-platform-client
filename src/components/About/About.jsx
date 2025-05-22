import React from 'react';
import aboutImg from '../../assets/about.png'
import groovyWalkAnimation from "../../animations/groovyWalk.json"
import { useLottie } from 'lottie-react';

const About = () => {

    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <section className="bg-base-100 py-16 px-4 md:px-10 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bol mb-4">
                        About Us
                    </h2>
                    <p className="text-lg mb-4">
                        We are a passionate team of developers, designers, and creatives dedicated to delivering high-quality digital solutions. With a focus on modern technologies, user-friendly interfaces, and responsive design, we aim to help your business thrive in the online world.
                    </p>
                    <p className="text-md mb-4">
                        Our mission is to empower businesses and individuals with reliable, visually engaging, and performance-driven digital experiences. We believe in transparency, innovation, and lasting partnerships.
                    </p>
                    <p className="text-md mb-6">
                        Our vision is to become a trusted name in the digital landscape, where every idea is transformed into a meaningful and impactful digital solution.
                    </p>
                    <button className="btn btn-neutral">Meet Our Team</button>
                    {View}
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={aboutImg}
                        alt="About us"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

            </div>
        </section>


    );
};

export default About;