import React,{useRef, useState} from 'react'
import {small} from "../data"
import './SmallProject.css'
import{GrClose} from "react-icons/gr"
import Draggable, {DraggableCore} from 'react-draggable';

const SmallProject = ({closeProject}) => {
 
 
    
 
    return ( 
     <Draggable>
        <div className='smallProject'>    
           <div className='project__cont'>
           <GrClose className='close'  onClick={closeProject} />
                <h3>Small Projects</h3>
                  </div>
                  <div  className='smallProject__cont' >
                 {small.map((projects)=>{     
                  const {id, name, url, img, icon, link,}  = projects  
               return(                                               
                <li              
                  key={id}
                  className='list__Project'>
                <div className='project__text'>
                  <a className='link__color' target="_blank" rel="noreferrer noopener" href={url}>
                    <img className='smallProject__img' alt='projectsImage'src={img}/>            
                    <h4 className='Small__icon'>{name}</h4>  
                  </a>   
                </div>   
             <div className='github__container'>            
              <a target="_blank" rel="noreferrer noopener" href={link} className='github__link'>             
                <button>
               Github
                
                  </button>                                             
                </a>                   
             </div>                                                                                                 
                </li>                                            
               )
           })}
        
                
           
       
              </div>   
   
             
        </div>
        </Draggable>
    ) 
}

export default SmallProject
