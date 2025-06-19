import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/HomePage';
import SalesPage from './pages/SalesPage';
import UtilitiesPage from './pages/UtilitiesPage';
import StocksPage from './pages/StocksPage';
import ReportsPage from './pages/ReportsPage';
import UsersPage from './pages/UsersPage';
import SuppliersPage from './pages/SuppliersPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/sales" element={<SalesPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/utilities" element={<UtilitiesPage />} />
                <Route path="/stocks" element={<StocksPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/suppliers" element={<SuppliersPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </Router>
    );
};

export default App;
   
