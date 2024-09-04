
const StatisticsCard = ({ title, value, description, chart }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 m-2">
      <h2 className="text-gray-700 text-lg">{title}</h2>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{description}</div>
      {chart}
    </div>
  );
};

export default StatisticsCard;