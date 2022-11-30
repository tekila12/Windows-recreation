import React, { useRef, useState } from 'react'
import { data} from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import Draggable, {DraggableCore} from 'react-draggable';

const ThreeDProjects = ({ closeThree }) => {
    const [currentPosition, setCurrentPosition] = useState({
        xRate: -120,
        yRate: 150
      });
    
      const onDrag = (e, data) => {
        setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
      };
    const nodeRef = React.useRef(null);

    return (
        <Draggable cancel='.close'  nodeRef={nodeRef}  position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate
          }}
          onDrag={onDrag}>    
        <div ref={nodeRef}className='smallProject'>
            <div className='project__cont'>
               <GrClose className='close' onClick={closeThree}  />
                <h3>3D Projects</h3>
            </div>      
            <div className='smallProject__cont' >
                {data.three.map((threeProjects) => {
                    return (
                        <React.Fragment  key={threeProjects.id}>
                            <li                                                         
                                className='list__Project'>
                                <div className='project__text'>
                                    <a className='link__color' target="_blank" rel="noreferrer noopener" href={threeProjects.url}>
                                        <img className='smallProject__img' alt='projectsImage' src={threeProjects.img} />
                                        <h4 className='Small__icon'>{threeProjects.name}</h4>
                                    </a>
                                    <div className='project__hover'>
                                    <a target="_blank" rel="noreferrer noopener" href={threeProjects.link}>
                                        <svg>{threeProjects.icon}</svg>
                                       </a>
                                       
                                </div>
                                <div className='github__container'>            
              <a target="_blank" rel="noreferrer noopener" href={threeProjects.link} className='github__link'>             
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

export default ThreeDProjects
