import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <div className='relative'>
            <nav className={`sticky top-0 z-50 mx-auto transition-all duration-300 ease-in-out ${scrolled ? "max-w-7xl px-6 py-2 border-white/10 shadow-lg bg-white/10 rounded-2xl backdrop-filter backdrop-blur-3xl" : "max-w-11/12"}`}>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;