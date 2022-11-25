import React, { useRef } from 'react'
import { data } from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import HoverIcons from './HoverIcons'
import { useTransition, animated } from 'react-spring'
const FullStackProjects = ({ closeFull }) => {
    return (
        <div className='smallProject'>
            <div className='project__cont'>
                         <GrClose className='close' onClick={closeFull} /> 
                <h3>Full Stack Projects</h3>
       
            </div>   
            <div className='smallProject__cont' >
                {data.fullstack.map((fullstackProject) => {
                    return (
                        <>
                            <li
                               
                                key={fullstackProject.id}
                                className='list__Project'>
                                <div className='project__text'>
                                    <a className='link__color' target="_blank" rel="noreferrer noopener" href={fullstackProject.url}>
                                        <img className='smallProject__img' alt='projectsImage' src={fullstackProject.img} />
                                        <h4 className='Small__icon'>{fullstackProject.name}</h4>
                                    </a>
                                </div>
                                <div className='project__hover'>
                                    <a target="_blank" rel="noreferrer noopener" href={fullstackProject.link}>
                                        <svg>{fullstackProject.icon}</svg>
                                        
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