
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ConnectionGraph = () => {
  const percentage = 75;

  return (
    <div className="p-4 h-[50%] shadow-md rounded-lg bg-white">
      <h2 className="text-lg font-semibold">Connection</h2>
      <div className="flex justify-center items-center">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: '#000',
              pathColor: '#4caf50',
              trailColor: '#d6d6d6',
            })}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm">Clients able to connect</p>
        <div className="flex justify-between text-sm mt-2">
          <span className="flex items-center">
            <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span> Connected
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-gray-400 inline-block mr-2"></span> Failed
          </span>
        </div>
      </div>
      <div className=' p-2 mt-4 w-full bg-slate-200'> 
        <div className='flex justify-between items-center'>
            <div>
                <div><p>Most problematic SSID</p></div>
                <div className='text-blue-600 font-bold'>Blizzard</div>
            </div>
            <div>
            <div><p>Most problematic client</p></div>
            <div className='text-blue-600 font-bold '>Joes-Android</div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default ConnectionGraph;
