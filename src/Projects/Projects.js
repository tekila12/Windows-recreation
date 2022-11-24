import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import SmallProject from './SmallProject'
import FrontEndProjects from './FrontEndProjects'
import "../App.css"
import { frontEnd } from '../data'

const data = [
  {
    id: 766,
    img: "./images/icons/folder.png",
    image: "./images/icons/file.png",
    smallProject: "Small Projects",

    id: 764,
    img: "./images/icons/folder.png",
    image: "./images/icons/file.png",
    frontEnd: "Front End Projects",

  },

]

const Projects = () => {

  const [show, set] = React.useState(true)
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const [isFrontOpen, setIsFrontOpen] = useState(false)
  const [smallProject, setSmallProject] = useState()
  const [frontProject, setFrontProject] = useState()
  const [games, setGames] = useState()
  const [active, setActive] = useState()
  const smallProjectRef = useRef(null)
  const frontEndprojectRef = useRef(null)



  const closeProject = () => {
    setIsProjectOpen(false)
  }
  const closeFront = () => {
    setIsProjectOpen(false)
  }
  const openFront = () => {
    setIsProjectOpen(true)
  }

  const fron = data.find(projects => projects.id === frontProject)
  const proj = data.find(projects => projects.id === smallProject)


  const activeWindow = () => {
   if(setIsFrontOpen(true)){
    alert('opened')
   }
  
  }

  /* OutsideClick Logic */

/*
  const handleProject = (e) => {
    if (smallProjectRef.current && !smallProjectRef.current.contains(e.target)) {
      closeProject()
    }
  }



  useEffect(() => {
    document.addEventListener('click', handleProject)
    return () => {
      document.removeEventListener('click', handleProject)
    }
  }, [])


  const handleFrontEndProjects = (e) => {
    if (frontEndprojectRef.current && !frontEndprojectRef.current.contains(e.target)) {
      closeFront()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleFrontEndProjects)
    return () => {
      document.removeEventListener('click', handleFrontEndProjects)
    }
  }, [])


*/




  return (
        <>      
        <div className='projects__wrapper'> 
          {data.map((projects) => {
            return (
                
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    onClick={() => { setIsProjectOpen(!isProjectOpen); setSmallProject(projects.id) }}
                  
                    key={projects.id}
                    
                     >
                      
                    <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />

                    <h4>
                      {projects.smallProject} </h4>
                    {isProjectOpen ? <SmallProject closeProject={closeProject} /> : null}
                  </div>)}
              </>
            )
          })}

          {data.map((projects) => {
            return (
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    key={projects.id}
                    onClick={() => {setIsFrontOpen(!isFrontOpen);  setFrontProject(projects.id) }}
                 
                  >
                    <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />
                    <h4>
                      {projects.frontEnd} </h4>
                    {isFrontOpen ? <FrontEndProjects active={active} isFrontOpen={isFrontOpen} closeFront={closeFront} /> : null}
                  </div>)}
              </>
            )
          })}
               
          
            
             </div>  
        </>
    
  );
}
export default Projects;

