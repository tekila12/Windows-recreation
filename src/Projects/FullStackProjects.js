import React, { useRef } from 'react'
import { frontEnd } from "../data"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import HoverIcons from './HoverIcons'
import { useTransition, animated } from 'react-spring'
const FullStackProjects = ({ closeFull }) => {
    return (
        <div className='smallProject'>
            <div className='project__cont'>
                     
                <h3>Front End Projects</h3>
                <GrClose className='close' onClick={closeFull} />
            </div>   
            <div className='smallProject__cont' >
                {frontEnd.map((frontEndProjects) => {
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

export default FullStackProjects