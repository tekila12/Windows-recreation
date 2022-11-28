import React, { useRef, ReactFragment } from 'react'
import { data } from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import Draggable, { DraggableCore } from 'react-draggable';

const FrontEndProjects = ({ closeFront }) => {

    const nodeRef = React.useRef(null);
   

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className='smallProject'>
                <div className='project__cont'>
                    <GrClose className='close' onClick={closeFront} />
                    <h3>Front End Projects</h3>
                </div>

                <div className='smallProject__cont' >
                    {data.frontend.map((frontEndProjects) => {
                        return (
                            <React.Fragment key={frontEndProjects.id}>
                                <li

                                    className='list__Project'>
                                    <div className='project__text ' >
                                        <a className='link__color' target="_blank" rel="noreferrer noopener" href={frontEndProjects.url}>
                                            <img className='smallProject__img' alt='projectsImage' src={frontEndProjects.img} />
                                            <h4 className='Small__icon'>{frontEndProjects.name}</h4>
                                        </a>
                                        <div className='github__container'>
                                            <a target="_blank" rel="noreferrer noopener" href={frontEndProjects.link} className='github__link'>
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

export default FrontEndProjects
