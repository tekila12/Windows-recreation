import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Button} from'@material-ui/core'
import  { FaTools } from 'react-icons/fa'

const AvastButton = ({closeAvast}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    

    const handleClick = () => {
        setIsLoading(true);
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const next = prevProgress + 10;
                if (next === 100) {
                    clearInterval(interval);
                    setIsLoading(false);
                    setHasLoaded(true);
                }
                return next;
            });
        }, 800);
    };

    if (!isLoading && !hasLoaded) {
        return (
            <div  className="avast__info">
                <div className='avast__main'>  
                <h3 className='avast__clean'>Avast has found some error on your Pc. Click on to the Repair button to fix issues </h3>
                <img className='avast__Image'src='images/icons/error.png' />
                  </div>            
                <button className='wobble__button' onClick={(e) => {
                e.stopPropagation(); handleClick()}}>
                    Repair your Pc
                    <FaTools className='fix__icon' />
                </button>
                 
            </div>
        );
    } else if (isLoading && !hasLoaded) {
        return (
            <div className='avast__finish'>
                <h3 >Avast is cleaning your Pc</h3>
            <div className="progress">
            <div className="progress__bar">
              </div>
                </div>
                  </div>
        );
    } else {
        return (
            <div>
                <h3>Avast has cleaned up you Pc</h3>
                <button className='exit__avast' onClick={closeAvast}>Exit</button>
            </div>
        );
    }
};

export default AvastButton;