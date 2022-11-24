import React,{useRef} from 'react'
import {smallProjects} from "../data"
import './SmallProject.css'
import{GrClose} from "react-icons/gr"
import HoverIcons from './HoverIcons'
import {useTransition, animated} from 'react-spring'
const SmallProject = ({closeProject}) => {
    return (
        <div className='smallProject'>    
           <div className='project__cont'>
              <GrClose className='close' onClick={closeProject} />
                <h3>Small Projects</h3>
                  </div>
                  <div  className='smallProject__cont' >
                 {smallProjects.map((projects)=>{          
               return(                                      
                      <HoverIcons 
                     {...projects}
                      />                                      
               )
           })}
              </div>   
        </div>
    
    )
}

export default SmallProject
