import React, { useRef } from 'react'
import { data} from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import Draggable, {DraggableCore} from 'react-draggable';

const ThreeDProjects = ({ closeThree }) => {
    return (
        <Draggable >

      
        <div className='smallProject'>
            <div className='project__cont'>
               <GrClose className='close' onClick={closeThree}  />
                <h3>3D Projects</h3>
            </div>      
            <div className='smallProject__cont' >
                {data.three.map((threeProjects) => {
                    return (
                        <>
                            <li
                               
                                key={threeProjects.id}
                                className='list__Project'>
                                <div className='project__text'>
                                    <a className='link__color' target="_blank" rel="noreferrer noopener" href={threeProjects.url}>
                                        <img className='smallProject__img' alt='projectsImage' src={threeProjects.img} />
                                        <h4 className='Small__icon'>{threeProjects.name}</h4>
                                    </a>
                                </div>
                                <div className='project__hover'>
                                    <a target="_blank" rel="noreferrer noopener" href={threeProjects.link}>
                                        <svg>{threeProjects.icon}</svg>
                                       </a>
                                </div>
                            </li>
                        </>

                    )
                })}
            </div>
        </div>
        </Draggable>
    )
}

export default ThreeDProjects
