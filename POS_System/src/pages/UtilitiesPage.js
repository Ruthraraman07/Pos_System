import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const UtilitiesPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Utilities Page</h1>
                    <p>Welcome to the POS Utilities Page.</p>
                </div>
            </div>
        </div>
    );
};

export default UtilitiesPage;
