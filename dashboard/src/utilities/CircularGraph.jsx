
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGraph = ({ percentage, label }) => {
  return (
    <div className="w-32 h-32">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: percentage > 50 ? '#4caf50' : '#ff9800',
          trailColor: '#d6d6d6',
        })}
      />
      <div className="text-center mt-2 text-sm">{label}</div>
    </div>
  );
};

export default CircularGraph;
