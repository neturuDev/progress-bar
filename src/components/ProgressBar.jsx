import { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ time=10000, steps=10 }) => {
  const [ percent , setPercent ] = useState(0);
  const timePerStep = time/steps;
  const percentPerStep = 100/steps;

  useEffect(() => {
    let timeout;
    if(percent < 100){
      timeout = setTimeout(() => {
        setPercent(prevPercent => prevPercent + percentPerStep)
      }, timePerStep);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [percent])

  const roundedPercent = Math.round(percent);

  return(
    <div className='progress-bar'>
      <div className="progress" style={{width: `${percent}%`}}>{roundedPercent}%</div>
    </div>
  )
}

export default ProgressBar;