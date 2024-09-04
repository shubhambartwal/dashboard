import ConnectionGraph from './ConnectionGraph';
import PerformanceGraph from './PerformanceGraph';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-100 min-h-screen">
      <ConnectionGraph />
      <PerformanceGraph />
    </div>
  );
};

export default Dashboard;
