import React,{useRef} from 'react'
import {frontEnd, smallProjects} from "../data"
import './SmallProject.css'
import{GrClose} from "react-icons/gr"
import HoverIcons from './HoverIcons'
import {useTransition, animated} from 'react-spring'
const FrontEndProjects = ({closeProject}) => {
    return (
        <div className='smallProject'>    
           <div className='project__cont'>
              <GrClose className='close' onClick={closeProject} />
                <h3>Windows project</h3>
                  </div>
                  <div  className='smallProject__cont' >
                 {frontEnd.map((projects)=>{          
               return(                                      
                     <>
                     <div>
                        {projects.name}
                     </div>
                     </>
                     
                                       
               )
           })}
              </div>   
        </div>
    
    )
}

export default FrontEndProjects
