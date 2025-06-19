import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ProductTable from '../components/ProductTable';

const ProductPage = () => {
    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <div className="p-4">
                    <ProductTable />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
