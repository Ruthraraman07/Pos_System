import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const HomePage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Home Page</h1>
                    <p>Welcome to the POS Home Page.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
