import React, { useRef } from 'react'
import { data } from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import Draggable, {DraggableCore} from 'react-draggable';

const FrontEndProjects = ({ closeFront }) => {
  
    return (

  

  
        <div className='smallProject'> 
      
            <div className='project__cont'>
                <GrClose className='close' onClick={closeFront} />
                <h3>Front End Projects</h3>
            </div>
           
            <div className='smallProject__cont' >
                {data.frontend.map((frontEndProjects) => {
                    return (
                        <>
                            <li                              
                                key={frontEndProjects.id}
                                className='list__Project'>
                                <div className='project__text'>
                                    <a className='link__color' target="_blank" rel="noreferrer noopener" href={frontEndProjects.url}>
                                        <img className='smallProject__img' alt='projectsImage' src={frontEndProjects.img} />
                                        <h4 className='Small__icon'>{frontEndProjects.name}</h4>
                                    </a>
                                </div>
                                <div className='project__hover'>
                                    <a target="_blank" rel="noreferrer noopener" href={frontEndProjects.link}>
                                        <svg>{frontEndProjects.icon}</svg>
                                       </a>
                                </div>
                            </li>
                        </>

                    )
                })}
            </div>
        </div>
     

    )
}

export default FrontEndProjects
