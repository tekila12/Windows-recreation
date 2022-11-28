import React, { useRef, useState} from 'react'
import { data } from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import HoverIcons from './HoverIcons'
import { useTransition, animated } from 'react-spring'
import Draggable, {DraggableCore} from 'react-draggable';

const FullStackProjects = ({ closeFull }) => {
    const nodeRef = React.useRef(null); 

    const [currentPosition, setCurrentPosition] = useState({
        xRate: 115,
        yRate: 115
      });
    
      const onDrag = (e, data) => {
        setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
      };
    
    return (
        <Draggable nodeRef={nodeRef} cancel='.close'  position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate}}>
        <div ref={nodeRef} className='smallProject'>
            <div className='project__cont'>
                         <GrClose className='close' onClick={closeFull} /> 
                <h3>Full Stack Projects</h3>
       
            </div>   
            <div className='smallProject__cont' >
                {data.fullstack.map((fullstackProject) => {
                    return (
                        <React.Fragment  key={fullstackProject.id}>
                            <li
                               
                               
                                className='list__Project'>
                                <div className='project__text'>
                                    <a className='link__color' target="_blank" rel="noreferrer noopener" href={fullstackProject.url}>
                                        <img className='smallProject__img' alt='projectsImage' src={fullstackProject.img} />
                                        <h4 className='Small__iconn'>{fullstackProject.name}</h4>
                                    </a>
                                     <div className='github__container'>
                                    <a target="_blank" rel="noreferrer noopener" href={fullstackProject.link} className='github__link'>
                                        <button>
                                            Github
                                        </button>
                                    </a>
                                </div>                  
                                </div>
                                       
                            </li>
                        </React.Fragment>

                    )
                })}
            </div>
        </div>
        </Draggable>
    )
}

export default FullStackProjects