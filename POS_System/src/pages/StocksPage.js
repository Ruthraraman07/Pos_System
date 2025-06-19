import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const StocksPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Stocks Page</h1>
                    <p>Welcome to the POS Stocks Page.</p>
                </div>
            </div>
        </div>
    );
};

export default StocksPage;
