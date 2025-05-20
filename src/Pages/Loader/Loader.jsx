import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-dots w-16 h-16 text-orange-400"></span>
        </div>
    );
};

export default Loader;