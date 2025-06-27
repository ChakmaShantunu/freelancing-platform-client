import React, { useContext, useState } from 'react';
import { AuthContext } from '../PrivateRoute/AuthProvider';



const Profile = () => {

    const { user, handleSignOut } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    if (!user) {
        return null
    }

    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div className="relative group" onMouseLeave={() => setShow(false)}>

            <img
                onClick={handleShow}
                className="w-8 h-8 md:w-12 md:h-12 rounded-full cursor-pointer"
                src={`${user ? user?.photoURL : userImg}`}
                alt=""
                onMouseEnter={() => setShow(true)}
            />

            <div className={`absolute top-10 right-0 w-72 p-4 bg-neutral text-base-100 rounded-lg z-50 transition-all duration-300
        ${show ? "opacity-100 visible" : "opacity-0 invisible"} md:group-hover:opacity-100 md:group-hover:visible`}>
                <div className="card bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user?.displayName || "No Name"}</h2>
                        <p>PhotoURL: {user?.photoURL || ""}</p>
                        <div className="card-actions justify-end">
                            <button
                                onClick={handleSignOut}
                                className="btn btn-xs btn-primary sm:btn-sm md:btn-sm lg:btn-md">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Profile;