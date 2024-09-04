
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SwitchDashboard from './components/SwitchPage';
import NetworkDashboard from './components/NetworkPage';
// import CellularGatewayDashboard from './components/CellularGatewayDashboard';
// Import other dashboard components here
import OrganisationPage from './components/OrganisationPage'
import SwitchPage from './components/SwitchPage';
function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Navigate to="/switch" />} /> {/* Redirect to Switch dashboard by default */}
              <Route path="/network" element={<NetworkDashboard />} />
              {/* <Route path="/cellular" element={<CellularGatewayDashboard />} /> */}
              <Route path="/switch" element={<SwitchPage />} />
              {/* Add more routes for other sections */}
              <Route path="/organisation" element={<OrganisationPage />} />
              {/* <Route path="/cellular" element={<CellularGatewayDashboard />} /> */}
              {/* Add more routes for other sections */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
