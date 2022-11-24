import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import Info from './Info/Info'
import SmallProject from './Projects/SmallProject'
import FrontEndProjects from './Projects/FrontEndProjects'
import Taskbar from './TaskbarComponents/Taskbar/Taskbar'
import WindowsIcons from './WindowsIcons/WindowsIcons'
import "./App.css"
import DarkTheme from './Theme/DarkTheme'
import Games from './Games/Games'
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

const App = () => {

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

  const fron = data.find(projects => projects.id === frontProject)
  const proj = data.find(projects => projects.id === smallProject)


  /* OutsideClick Logic */


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







  return (
    transitions.map(({ key, props, item }) => item &&
      <animated.div style={props} key={key}>
        <>
          <Taskbar />
          <DarkTheme />
          <Info />
          <WindowsIcons />

          {data.map((projects) => {
            return (
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    onClick={() => { setIsProjectOpen(!isProjectOpen); setSmallProject(projects.id) }}
                    className='smallProject__container'
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
          {smallProject && (
            <div key={proj.id}
              onClick={(e) => {
                e.stopPropagation();
                setIsProjectOpen(!isProjectOpen)
              }}
              className={"smallProjects__containers " + ((isProjectOpen) ? "active" : "")} >
              <img alt='projectImage'
                src={proj.image} />
            </div>
          )}

          {data.map((projects) => {
            return (
              <>
                {active === frontEndprojectRef.id && (
                  <div
                    key={projects.id}
                    onClick={() => { setIsFrontOpen(!isFrontOpen); setFrontProject(projects.id) }}
                  >
                    <img alt='projectImage'
                      className="smallProject__img"
                      src={projects.img} />
                    <h4>
                      {projects.frontEnd} </h4>
                    {isFrontOpen ? <FrontEndProjects closeFront={closeFront} /> : null}
                  </div>)}
              </>
            )
          })}
           {frontProject && (       
           <div key={fron.id}
             onClick={(e) => {
             e.stopPropagation();
             setIsFrontOpen(!isFrontOpen)}}         
             className={"smallProjects__containers " + ((isFrontOpen) ? "active": "")} >
            <img alt='projectImage'
               src={fron.image}/>                  
            </div>
             )}     
        </>
      </animated.div>)
  );
}
export default App;

