import React,{useState, useEffect, useRef} from 'react'
import {useTransition, animated} from 'react-spring'
import Info from './Info/Info'
import SmallProject from './SmallProjects/SmallProject'
import Taskbar from './TaskbarComponents/Taskbar/Taskbar'
import WindowsIcons from './WindowsIcons/WindowsIcons'
import "./App.css"
import DarkTheme from './Theme/DarkTheme'
import Games from './Games/Games'
const data= [
{
  id:766,
  img:"./images/icons/folder.png",
  image:"./images/icons/file.png",
  name:"Small Projects",

},

]

const App =()=> {

  const [show, set] = React.useState(true)
  const transitions = useTransition(show, null, {
  from: {  opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  })

  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const [smallProject, setSmallProject] =useState()
  const [games, setGames] =useState()
  const [active, setActive] = useState()
  const project= useRef(null)


  const closeProject = () =>{
    setIsProjectOpen(false)
  }
  

  const proj = data.find(projects => projects.id === smallProject)


  /* OutsideClick Logic */
  const handleProject=(e)=>{
    if(project.current && !project.current.contains(e.target)){
      closeProject() 
    }
  }

  useEffect(()=>{
    document.addEventListener('click', handleProject)
    return() =>{
      document.removeEventListener('click', handleProject)
    }
  },[])






  return (
    transitions.map(({ key, props, item })=>item&&
    <animated.div style={props} key={key}>
    <> 
      <Taskbar/>  
      <DarkTheme />       
       <Info /> 
      <WindowsIcons />  
            
      {data.map((projects)=>{           
        return(
          <>
           {active === project.id && (
            <div
               onClick={()=>{setIsProjectOpen(!isProjectOpen);setSmallProject(projects.id)}}
               className='smallProject__container'
               key={projects.id}
               ref={project}   >        
              <img    alt='projectImage'        
               className="smallProject__img"           
               src={projects.img}/> 
           
           <h4> 
               {projects.name} </h4>
               {isProjectOpen ? <SmallProject /> :null}  
            </div>)}  
           </>   
             )  
             })}     
            {smallProject && (       
           <div key={proj.id}
             onClick={(e) => {
             e.stopPropagation();
             setIsProjectOpen(!isProjectOpen)}}         
             className={"smallProjects__containers " + ((isProjectOpen) ? "active": "")} >
            <img alt='projectImage'
               src={proj.image}/>                  
            </div>
             )}       
       
    </>   
    </animated.div> )    
  );
}
export default App;

