import React, { useContext } from 'react';
import MyBidsCard from './MyBidsCard';
import { AuthContext } from '../../../components/PrivateRoute/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loader from '../../Loader/Loader';

const MyBids = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    
    const { isLoading, data: myBids = [] } = useQuery({
        queryKey: ['myBids', user?.email],
        queryFn: async () => {
            const myBidsRes = await axios.get(`https://assignment-ten-grapes-server.vercel.app/my-bids?email=${user.email}`)
            return myBidsRes.data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(myBids);
    return (
        <div>
            <h2 className="text-4xl">My bids</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    myBids.map(myBid => <MyBidsCard key={myBid._id} myBid={myBid}></MyBidsCard>)
                }
            </div>

        </div>
    );
};

export default MyBids;