import React from 'react';
import error from '../../assets/erropage.png'

const NotFoundPage = () => {
    return (
        <div
            className="hero min-h-screen mt-12"
            style={{
                backgroundImage:
                    `url(${error})`,
            }}
        >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
                    <p className="mb-5">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;