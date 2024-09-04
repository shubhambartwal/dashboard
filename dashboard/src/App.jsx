// src/App.js

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SwitchDashboard from './components/SwitchDashboard';

function App() {
  const [selectedSection, setSelectedSection] = useState("switch");

  const renderContent = () => {
    switch (selectedSection) {
      case "network":
        return <div>Network-wide content here</div>;
      case "cellular":
        return <div>Cellular Gateway content here</div>;
      case "switch":
        return <SwitchDashboard />;
      case "wireless":
        return <div>Wireless content here</div>;
      case "systems":
        return <div>Systems Manager content here</div>;
      case "camera":
        return <div>Camera content here</div>;
      case "environmental":
        return <div>Environmental content here</div>;
      case "insight":
        return <div>Insight content here</div>;
      case "organization":
        return <div>Organization content here</div>;
      default:
        return <SwitchDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onSelectSection={setSelectedSection} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
