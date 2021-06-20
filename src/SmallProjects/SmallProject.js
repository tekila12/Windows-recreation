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
                <h3>Windows project</h3>
                  </div>
                  <div  className='smallProject__cont' >
                 {smallProjects.map((projects)=>{
               const {id, name, url, img, icon, link}= projects;
               return(                                      
                      <HoverIcons 
                      key={id}
                      name={name}
                      url={url}
                      img={img}
                      icon={icon}
                      link={link}
                      />                                      
               )
           })}
              </div>   
        </div>
    
    )
}

export default SmallProject
