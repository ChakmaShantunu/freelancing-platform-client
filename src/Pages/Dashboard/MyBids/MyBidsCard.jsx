import React from 'react';

const MyBidsCard = ({ bid }) => {
    const { title, budget, bidsCount, deadline } = bid
    console.log(bid);
    return (
        <div className="bg-base-100 rounded-xl shadow p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition mt-4">
            <h2 className="text-xl font-semibold dark:text-white mb-2">
                {title}
            </h2>
            <p className="text-sm mb-1">
                <span className="font-medium">Budget:</span> {budget}
            </p>
            <p className="text-sm mb-1">
                <span className="font-medium">Deadline:</span> {deadline}
            </p>
            <p className="text-sm font-medium">
                Total Bids: {bidsCount}
            </p>
        </div>
    );
};

export default MyBidsCard;