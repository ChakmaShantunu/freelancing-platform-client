import React from 'react';
import error from '../../assets/erropage.png'
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from "../../animations/groovyWalk.json";


const NotFoundPage = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    `url(${error})`,
            }}
        >
            <div className="hero-overlay min-h-screen"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
                    <p className="mb-5">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    {View}
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;