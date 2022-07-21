import React,{useState, useEffect} from 'react'
import Computer from './Computer'
import Monitor from './Monitor'
import Desk from './Desk'
import {
    useHistory
  } from "react-router-dom";
import Keyboard from './Keyboard';
export const Setup = () => {

    const history = useHistory()

    const [colorGreen, setColorGreen] = useState(false);
    const [spinnerOne, setSpinnerOne] = useState(false);
    const [spinnerTwo, setSpinnerTwo] = useState(false);
    const [backgroundColor, setBackgroundColor]= useState(false)
    const [keyboardActive, setKeyboardActive] = useState(false)
    const [streching, setStreching] = useState(false);
    const [mouseColor, setMouseColor] = useState(false);
   


   const push= ()=>{ 
    setTimeout(()=>{
    setSpinnerOne(true)
    setSpinnerTwo(true)   
    setKeyboardActive(true)
    setStreching(true)
    setMouseColor(true)
    },1000)
    setColorGreen(true)
    setBackgroundColor(true)
    
    setTimeout(()=>{
       history.push('/GuestPage')
    },5000)
  
   }

    return (
        <div className='setup'>
            <div className='Head'>        
            <Computer 
            colorGreen={colorGreen}
            spinnerOne={spinnerOne}
            spinnerTwo={spinnerTwo}
            push={push}/>
            <Monitor
            backgroundColor={backgroundColor}
            streching={streching}
            /> 
            <Desk        
             />   
            <Keyboard 
            keyboardActive={keyboardActive}
            mouseColor={mouseColor}/>         
            </div>
            <h2 className='press__button'>Press on the Power Button</h2>

            <div className='Desk__head'>    
            
            </div>          
        
        </div>
    )
}
