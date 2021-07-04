import React,{useState} from 'react'
import {
    useHistory
  } from "react-router-dom";
const Computer = ({spinnerOne, spinnerTwo, colorGreen, push}) => {

 

    return (
       
           <div className='computer__main'>
             <div className='computer__cont'>
                 <h6 className='cd__rom'>CD-ROM</h6>
                 <div className='computer__top'>
                   <div className='cd__In'>
                   </div>
                 <span className='cd__press'></span>
                 </div>
                 <h6 className='power__text'> Power </h6>
                 <span className={spinnerOne  ? `spinner spinnerOne` :'spike'}></span>
                 <span className={spinnerTwo  ? `spin spinnerTwo` :'spins'}></span>
                 <span onClick={push} className={colorGreen  ? `power__up colorGreen` :'power__up'}><span className='power__click'></span></span>
           <div className='jacks'>
             <span className='line__in'><span className='tick'> </span></span> 
             <h6 className='text__in'>In</h6>
             <span className='line__out'><span className='tick'> </span></span> 
             <h6 className='text__in' >Out</h6>        
           </div>
           </div>  
           </div>
        
    )
}

export default Computer
