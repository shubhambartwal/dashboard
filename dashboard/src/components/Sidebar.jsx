// src/components/Sidebar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired, faMobileAlt, faServer, faWifi, faCogs, faCamera, faThermometerHalf, faChartLine, faBuilding } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelectSection }) => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <h2 className="text-xl font-bold p-4">Menu</h2>
      <ul className="flex-grow">
        <li onClick={() => onSelectSection("network")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faNetworkWired} className="mr-3" />
          Network-wide
        </li>
        <li onClick={() => onSelectSection("cellular")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faMobileAlt} className="mr-3" />
          Cellular Gateway
        </li>
        <li onClick={() => onSelectSection("switch")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faServer} className="mr-3" />
          Switch
        </li>
        <li onClick={() => onSelectSection("wireless")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faWifi} className="mr-3" />
          Wireless
        </li>
        <li onClick={() => onSelectSection("systems")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faCogs} className="mr-3" />
          Systems Manager
        </li>
        <li onClick={() => onSelectSection("camera")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faCamera} className="mr-3" />
          Camera
        </li>
        <li onClick={() => onSelectSection("environmental")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faThermometerHalf} className="mr-3" />
          Environmental
        </li>
        <li onClick={() => onSelectSection("insight")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faChartLine} className="mr-3" />
          Insight
        </li>
        <li onClick={() => onSelectSection("organization")} className="p-4 hover:bg-gray-700 flex items-center cursor-pointer">
          <FontAwesomeIcon icon={faBuilding} className="mr-3" />
          Organization
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
