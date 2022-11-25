import React, { useContext } from 'react'
import './ControlPanel.css'
import { AppContext, AppProvider, useGlobalContext } from '../../context'
import WindowsIcons from '../../WindowsIcons/WindowsIcons'

import { GrClose } from 'react-icons/gr'

const ControlPanel = ({closePanel}) => {

const {remove, icons }= useGlobalContext()
  

console.log(icons)


    return ( 
        <div className='control__Panel'>
          <div className='close__cont'>
            <GrClose className='close' onClick={closePanel} />
            <h3>Control Panel</h3>
          </div>
          <div className='control__cont'>
            {Object.keys(icons).map((unin)=> {            
              const { name, img, id} = unin         
                return (               
                 <li className='control' key={id}>
                  <div className='img__text'> 
                    <img className='control__Img' src={img} />             
                    <h4 className='control__name'>{name}</h4>
                  </div>             
                <button className='unin__button'  onClick={(e) => {
                 e.stopPropagation();
                 remove(id) }}>Uninstall</button>   
              </li> 
               )                                            
          })}         
          </div>             
        </div>
              
        
    )
}

export default ControlPanel
