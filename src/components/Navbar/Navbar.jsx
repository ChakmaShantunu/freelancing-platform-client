import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../PrivateRoute/AuthProvider';
import Profile from '../Profile/Profile';
import logo from '../../assets/logo.png'




const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/addTask">Add Task</NavLink></li>
    <li><NavLink to="/browseTask">Browse Tasks</NavLink></li>
    {/* <li><NavLink to="/postedTask">My Posted Tasks</NavLink></li> */}
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
</>
const Navbar = () => {

    const navigate = useNavigate();

    const { user, handleSignOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");

    const handleToggle = e => {
        const isChecked = e.target.checked
        const newTheme = isChecked ? 'dark' : 'light'
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(isChecked);
    }

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')
        if (saveTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark')
            setTheme(true)
        } else {
            document.documentElement.setAttribute('data-theme', 'light')
            setTheme(false)
        }
    }, [])



    return (
        <div className="navbar bg-base-100">
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
                <Link to='/'>
                    <img src={logo} className='w-10 h-10 hidden md:block' alt="" />
                </Link>
                <NavLink to='/' className="btn btn-ghost text-xl">kAj Khujhi</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <label className="flex cursor-pointer gap-2 mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" className="toggle theme-controller" onChange={handleToggle} checked={theme} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>

                {
                    user?.email ? "" : (<button onClick={() => navigate('/register')} className="btn btn-xs btn-soft btn-outline sm:btn-sm md:btn-sm lg:btn-md">Register</button>)
                }
                {
                    user?.email ? "" : (<button onClick={() => navigate('/log-in')} className="btn btn-xs btn-soft btn-outline sm:btn-sm md:btn-sm lg:btn-md">Login</button>)
                }
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Navbar;