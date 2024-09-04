import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PerformanceGraph = () => {
  const percentage = 75;

  return (
    <div className="p-4 h-[50%] shadow-md rounded-lg bg-white">
      <h2 className="text-lg font-semibold">Performance</h2>
      <div className='flex'>
        
      <div className='border h-[vh] flex  justify-center items-center '> <p className="text-sm "><b>75%</b> latency less than 64ms</p></div>
      <div className="border flex justify-center items-center m-6">
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
      <div className="border mt-2">
       
        <div className="flex justify-between text-sm mt-2 flex-col p-4 m-4">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-green-500 inline-block mr-2"></span> Less than 64ms
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-yellow-500 inline-block mr-2"></span> Between _ms and _ms
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-red-500 inline-block mr-2"></span> More than _ms
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-300 inline-block mr-2"></span> No data available
          </div>
        </div>
      </div>
    </div>
    <div className=' p-2 mt-4 w-full bg-slate-200'> 
        <div className='flex justify-between items-center'>
            <div>
                <div><p>Average siginal quality</p></div>
                <div className='text-blue-600 font-bold'>50dB</div>
            </div>
            <div>
            <div><p>Average latency</p></div>
            <div className='text-blue-600 font-bold '>0ms</div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default PerformanceGraph;
