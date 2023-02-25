import React, { useRef, ReactFragment } from 'react'
import { data } from "../database"
import './SmallProject.css'
import { GrClose } from "react-icons/gr"
import Draggable, { DraggableCore } from 'react-draggable';

const GamesProject = ({ closeGames }) => {

    const nodeRef = React.useRef(null);
   

    return (
        <Draggable cancel='.close' nodeRef={nodeRef}>
            <div ref={nodeRef} className='smallProject'>
                <div className='project__cont'>
                    <GrClose className='close' onClick={closeGames} />
                    <h3>Games Project</h3>
                </div>

                <div className='smallProject__cont' >
                    {data.games.map((gamesProject) => {
                        return (
                            <React.Fragment key={gamesProject.id}>
                                <li

                                    className='list__Project'>
                                    <div className='project__text ' >
                                        <a className='link__color' target="_blank" rel="noreferrer noopener" href={gamesProject.url}>
                                            <img className='smallProject__img' alt='projectsImage' src={gamesProject.img} />
                                            <h4 className='Small__icon'>{gamesProject.name}</h4>
                                        </a>
                                        <div className='github__container'>
                                            <a target="_blank" rel="noreferrer noopener" href={gamesProject.link} className='github__link'>
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

export default GamesProject
