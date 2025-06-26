import React from 'react';

const MyBidsCard = ({ myBid }) => {
    const { title, budget, bidsCount, deadline } = myBid
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-400">Budget:</span> {budget}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-400">Deadline:</span> {deadline}
            </p>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Total Bids: {bidsCount}
            </p>
        </div>
    );
};

export default MyBidsCard;