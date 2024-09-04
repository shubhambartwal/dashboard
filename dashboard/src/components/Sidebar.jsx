// src/components/Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faMobileAlt, faServer, faWifi, faCogs, faCamera, faThermometerHalf, faChartLine, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <h2 className="text-xl font-bold p-4">Menu</h2>
      <ul className="flex-grow">
        <li>
          <NavLink
            to="/network"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faNetworkWired} className="mr-3" />
            Network-wide
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cellular"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faMobileAlt} className="mr-3" />
            Cellular Gateway
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/switch"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faServer} className="mr-3" />
            Switch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wireless"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faWifi} className="mr-3" />
            Wireless
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/systems"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faCogs} className="mr-3" />
            Systems Manager
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/camera"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faCamera} className="mr-3" />
            Camera
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/environmental"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faThermometerHalf} className="mr-3" />
            Environmental
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/insight"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-3" />
            Insight
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/organisation"
            className={({ isActive }) =>
              `p-4 flex items-center hover:bg-gray-700 ${
                isActive ? 'bg-gray-600 text-white' : ''
              }`
            }
          >
            <FontAwesomeIcon icon={faBuilding} className="mr-3" />
            Organisation
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
