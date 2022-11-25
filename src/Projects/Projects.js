import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import SmallProject from './SmallProject'
import FrontEndProjects from './FrontEndProjects'
import "../App.css"
import { frontEnd } from '../data'
import FullStackProjects from './FullStackProjects'
import ThreeDProjects from './ThreeDProjects'

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

    id: 765,
    img: "./images/icons/folder.png",
    image: "./images/icons/file.png",
    gl: "3D/Web Gl Projects",
    
    id: 766,
    img: "./images/icons/folder.png",
    image: "./images/icons/file.png",
    full: "FullStack Projects",
   

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
  const [isFullOpen, setIsFullOpen] = useState(false)
  const [isThreeOpen, setIsThreeOpen] = useState(false)
  const [smallProject, setSmallProject] = useState()
  const [FullProject, setFullProject] = useState()
  const [ThreeProject, setThreeProject] = useState()
  const [frontProject, setFrontProject] = useState()
  const [games, setGames] = useState()
  const [active, setActive] = useState()
  const smallProjectRef = useRef(null)
  const frontEndprojectRef = useRef(null)



  const closeProject = () => {
    setIsProjectOpen(false)
  }
  const closeFront = () => {
    setIsFrontOpen(false)
  }
  const closeThree = () => {
    setIsThreeOpen(false)
  }
  const closeFull = () => {
    setIsFullOpen(false)
  }
 /*
  const fron = data.find(projects => projects.id === frontProject)
  const proj = data.find(projects => projects.id === smallProject)

*/

  /* OutsideClick Logic */


  // const handleProject = (e) => {
  //   if (smallProjectRef.current && !smallProjectRef.current.contains(e.target)) {
  //     closeProject() && closeThree()
  //   }
  // }



  // useEffect(() => {
  //   document.addEventListener('click', handleProject)
  //   return () => {
  //     document.removeEventListener('click', handleProject)
  //   }
  // }, [])


  // const handleFrontEndProjects = (e) => {
  //   if (frontEndprojectRef.current && !frontEndprojectRef.current.contains(e.target)) {
  //     closeFront()
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('click', handleFrontEndProjects)
  //   return () => {
  //     document.removeEventListener('click', handleFrontEndProjects)
  //   }
  // }, [])







  return (
        <>      
        <div className='projects__wrapper'> 
          {data.map((projects) => {
            return (               
              <>      
                  <div                                
                    key={projects.id}                   
                     >
                      <div onDoubleClick={() => { setIsProjectOpen(!isProjectOpen) }}>
                           <img alt='projectImage'
                    
                      className="smallProject__img"
                      src={projects.img} />
                    <h4 className='project__text'>
                      {projects.smallProject} </h4> 
                      </div>              
                    {isProjectOpen ? <SmallProject closeProject={closeProject}  /> : null}
                  </div>
              </>
            )
          })}

          {data.map((projects) => {
            return (
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    key={projects.id}
               
                 
                  ><div onDoubleClick={() => {setIsFrontOpen(!isFrontOpen) }}>
                    <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />
                    <h4>
                      {projects.frontEnd} </h4>
                  </div>
                    
                    {isFrontOpen ? <FrontEndProjects  closeFront={closeFront} /> : null}
                  </div>)}
              </>
            )
          })}
           {data.map((projects) => {
            return (
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    ref={smallProjectRef}
                    key={projects.id}
                              
                  >
                    <div  onDoubleClick={() => {setIsThreeOpen(!isThreeOpen);  setThreeProject(projects.id) }}>
                      <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />
                    <h4>
                      {projects.gl} </h4>
                    </div>
                    
                    {isThreeOpen ? <ThreeDProjects  closeThree={closeThree} /> : null}
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
                    
                 
                  >
                    <div onDoubleClick={() => {setIsFullOpen(!isFullOpen);  setFullProject(projects.id) }} >
                      <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />
                    <h4>
                      {projects.full} </h4>
                    </div>
                    
                    {isFullOpen ? <FullStackProjects  closeFull={closeFull} /> : null}
                  </div>)}
              </>
            )
          })}
               
          
            
             </div>  
        </>
    
  );
}
export default Projects;

