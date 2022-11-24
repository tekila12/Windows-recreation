import React, { useState, useEffect, useRef } from 'react'
import { useTransition, animated } from 'react-spring'
import Info from './Info/Info'
import Projects from './Projects/Projects'
import FrontEndProjects from './Projects/FrontEndProjects'
import Taskbar from './TaskbarComponents/Taskbar/Taskbar'
import WindowsIcons from './WindowsIcons/WindowsIcons'
import "./App.css"
import DarkTheme from './Theme/DarkTheme'
import Games from './Games/Games'

const App = () => {
  const [show, set] = React.useState(true)
  const transitions = useTransition(show, null, {
    from: {  opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })
   

  return (
    transitions.map(({ key, props, item }) => item &&
      <animated.div style={props} key={key}>
        <>
          <Taskbar />
          <DarkTheme />
          <Info />
          <Projects />      
        </>
      </animated.div>)
  );
}
export default App;

