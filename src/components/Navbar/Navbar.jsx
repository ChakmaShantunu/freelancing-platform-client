import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../PrivateRoute/AuthProvider';
import Profile from '../Profile/Profile';




const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addTask">Add Task</NavLink></li>
    <li><NavLink to="/browseTask">Browse Tasks</NavLink></li>
    <li><NavLink to="/postedTask">My Posted Tasks</NavLink></li>
</>
const Navbar = () => {

    const navigate = useNavigate();

    const { user, handleSignOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">kAj Khujhi</a> */}
                <NavLink to='/' className="btn btn-ghost text-xl">kAj Khujhi</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <input type="checkbox" value="dark" className="toggle theme-controller" onChange={handleToggle} checked={theme === "dark"}/>

                {
                    user?.email ? "" : (<button onClick={() => navigate('/register')} className="btn btn-xs btn-primary btn-outline sm:btn-sm md:btn-sm lg:btn-md">Register</button>)
                }
                {
                    user?.email ? "" : (<button onClick={() => navigate('/log-in')} className="btn btn-xs btn-primary btn-outline sm:btn-sm md:btn-sm lg:btn-md">Login</button>)
                }
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Navbar;