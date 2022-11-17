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
   

const runningAnimation = () => {
    setSpinnerOne(true)
    setSpinnerTwo(true)   
    setKeyboardActive(true)
    setStreching(true)
    setMouseColor(true)
}

const stopAnimation = () => {
    setSpinnerOne(false)
    setSpinnerTwo(false)   
    setKeyboardActive(false)
    setStreching(false)
    setMouseColor(false)
}


const secondAnimation=() => {
    setColorGreen(true)
    setBackgroundColor(true)
}
const secondAnimationStop=() => {
    setColorGreen(false)
    setBackgroundColor(false)
}

   const push= ()=>{ 
    setTimeout(()=>{
    runningAnimation()
    },500)
    secondAnimation() 
    setTimeout(()=>{
       history.push('/GuestPage')
       stopAnimation()
       secondAnimationStop()
    },3200)
  
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


               
        
        </div>
    )
}
