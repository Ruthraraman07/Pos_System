import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HelpPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Help Page</h1>
                    <p>Welcome to the POS Help Page.</p>
                </div>
            </div>
        </div>
    );
};

export default HelpPage;
