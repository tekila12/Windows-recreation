import React from 'react'
import {windowsIcons} from "../data"
import './WindowsIcons.css'
import {  useGlobalContext } from '../context'
import Icons from './Icons'
const WindowsIcons = () => {
  const { icons }= useGlobalContext()
  
    return (
        <>
        {icons.map((icon)=>{
            const {id, name , img ,url, link, git} = icon
             return(          
                <Icons
                  key={id}
                  name={name}
                  img={img}
                  url={url}
                  link={link}
                  git={git}
                   />                         
           )
        })}                        
        </>
    )
}
export default WindowsIcons
