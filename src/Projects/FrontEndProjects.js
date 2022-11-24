import React,{useRef} from 'react'
import {frontEnd} from "../data"
import './SmallProject.css'
import{GrClose} from "react-icons/gr"
import HoverIcons from './HoverIcons'
import {useTransition, animated} from 'react-spring'
const FrontEndProjects = ({closeFront}) => {
    return (
        <div className='smallProject'>    
           <div className='project__cont'>
              <GrClose className='close' onClick={closeFront} />
                <h3>Windows project</h3>
                  </div>
                  <div  className='smallProject__cont' >
                 {frontEnd.map((frontEndProjects)=>{                        
               return(                                      
                    <>
                    <div>
                        <h2>{frontEndProjects.name}</h2>
                    </div>
                    </>
                                                         
               )
           })}
              </div>   
        </div>
    
    )
}

export default FrontEndProjects
