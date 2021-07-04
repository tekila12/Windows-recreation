import React,{useState, useEffect} from 'react'
import Computer from './Computer'
import Monitor from './Monitor'
import Desk from './Desk'
import {
    useHistory
  } from "react-router-dom";
export const Setup = () => {

    const history = useHistory()

    const [colorGreen, setColorGreen] = useState(false);
    const [spinnerOne, setSpinnerOne] = useState(false);
    const [spinnerTwo, setSpinnerTwo] = useState(false);
    const [backgroundColor, setBackgroundColor]= useState(false)
  
     
   
   


   const push= ()=>{ 
    setTimeout(()=>{
    setSpinnerOne(true)
    setSpinnerTwo(true) 
    setBackgroundColor(true)
    },1000)
    setColorGreen(true)
    setTimeout(()=>{
       history.push('/GuestPage')
    },3000)
  
   }

    return (
        <div className='setup'>
            <div className='Head'>        
            <Computer 
            colorGreen={colorGreen}
            spinnerOne={spinnerOne}
            spinnerTwo={spinnerTwo}
            push={push}/>
            <Monitor /> 
            <Desk bgColor={backgroundColor}/>            
            </div>
         <div className='Desk__head'>    
            </div>          
        </div>
    )
}
