import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCashRegister,
  faBoxOpen,
  faTools,
  faWarehouse,
  faChartBar,
  faUsers,
  faTruck,
  faCog,
  faSignOutAlt,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

const sidebarItems = [
  { name: 'Home' , icon: faHome, color: 'text-green-600' },
  { name: 'Sales', icon: faCashRegister, color: 'text-gray-400' },
  { name: 'Products', icon: faBoxOpen, color: 'text-gray-400' },
  { name: 'Utilities', icon: faTools, color: 'text-gray-400' },
  { name: 'Stocks', icon: faWarehouse, color: 'text-gray-400' },
  { name: 'Reports', icon: faChartBar, color: 'text-gray-400' },
  { name: 'Users', icon: faUsers, color: 'text-gray-400' },
  { name: 'Suppliers', icon: faTruck, color: 'text-gray-400' },
  { name: 'Settings', icon: faCog, color: 'text-gray-400' },
  { name: 'Exit', icon: faSignOutAlt, color: 'text-red-600' },
  { name: 'Help', icon: faQuestionCircle, color: 'text-gray-400' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-50 bg-white h-screen p-4 flex flex-col border-r-2 border-gray-400">
      <h1 className="text-xl font-bold mb-6">POS NAME</h1>
      <ul className="flex flex-col flex-grow justify-between">
        {sidebarItems.map(({ name, icon, color }) => {
          const isActive = location.pathname.includes(name.toLowerCase());
          const iconColor = isActive ? 'text-green-600' : color;
          const bgColor = isActive ? 'bg-white' : 'hover:bg-gray-300';

          const isSideIconLeft = ['Home', 'Exit', 'Help'].includes(name);

          if (isSideIconLeft) {
            if (name === 'Home') {
              return (
                <li key={name} className={`p-2 flex flex-col items-center`}>
                  <button
                    className="flex items-center bg-gradient-to-r from-teal-400 to-green-600
                shadow-green-700/50
               hover:brightness-105 text-white font-medium px-4 py-2 rounded"
                    style={{ minWidth: '120px' }}
                  >
                    <FontAwesomeIcon icon={icon} className="text-lg mr-2" />
                    {name}
                  </button>
                </li>
              );
            }
            return (
              <li key={name} className={`p-2 flex flex-col items-center ${bgColor}`}>
                <Link
                  to={`/${name.toLowerCase()}`}
                  className={`flex items-center font-medium text-gray-800 border-b-2 px-4 ${
                    isActive ? 'border-green-600' : 'border-gray-300'
                  }`}
                  style={{ minWidth: '120px' }}
                >
                  <FontAwesomeIcon icon={icon} className={`${iconColor} text-lg mr-2`} />
                  {name}
                </Link>
              </li>
            );
          }

          return (
            <li key={name} className={`p-2 flex flex-col items-center space-y-2 ${bgColor}`}>
              <FontAwesomeIcon icon={icon} className={`${iconColor} text-lg`} />
              <Link
                to={`/${name.toLowerCase()}`}
                className={`font-medium text-gray-800 border-b-2 px-4 ${
                  isActive ? 'border-green-600' : 'border-gray-300'
                }`}
                style={{ display: 'inline-block', textAlign: 'center', width: '120px' }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
