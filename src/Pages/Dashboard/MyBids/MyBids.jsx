import React, { useContext } from 'react';
import { AuthContext } from '../../../components/PrivateRoute/AuthProvider';

import Loader from '../../Loader/Loader';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MyBidsCard from './MyBidsCard';

const MyBids = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const { data: myBids = [], isLoading } = useQuery({
        queryKey: ['myBids', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://assignment-ten-grapes-server.vercel.app/posted-tasks?email=${user.email}`)
            return res.data
        },
        enabled: !!user?.email
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(myBids);

    // useEffect(() => {
    //     fetch(`https://assignment-ten-grapes-server.vercel.app/posted-tasks?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyTask(data);
    //         })
    // }, [user.email])

    return (
        <div>
            <h2 className="text-4xl">My bids</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    myBids.map(bid => <MyBidsCard key={bid._id} bid={bid}></MyBidsCard>)
                }
            </div>

        </div>
    );
};

export default MyBids;