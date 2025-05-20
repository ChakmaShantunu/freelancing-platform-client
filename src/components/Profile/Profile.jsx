import React, { useContext, useState } from 'react';
import { AuthContext } from '../PrivateRoute/AuthProvider';



const Profile = () => {

    const { user } = useContext(AuthContext)

    const [show, setShow] = useState(false);
    if (!user) {
        return null
    }

    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div className='relative'>
            <img onClick={handleShow} className='w-8 h-8 md:w-16 md:h-16 cursor-pointer' src={`${user ? user?.photoURL : userImg}`} alt="" />
            {
                show && (
                    <div className='absolute bg-amber-100 right-0 w-48 p-4 z-50 mt-2 rounded-lg'>
                        <div className='flex justify-between items-center mb-4'>
                            <p className='text-xl'>Profile</p>
                            <p className='text-xl'>Amount</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p>{user?.displayName || "No Name"}</p>
                            <p>{user?.amount}</p>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Profile;