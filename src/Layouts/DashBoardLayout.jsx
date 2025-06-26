import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Pages/Dashboard/Sidebar/Sidebar';

const DashBoardLayout = () => {
    return (
        <div className='flex min-h-screen'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='flex-1 bg-base-100 p-12 border border-gray-100 shadow-2xl'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoardLayout;