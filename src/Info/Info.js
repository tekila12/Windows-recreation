import React from 'react'
import {info} from "../data"
import "./Info.css"

function Info() {
    return (
        <>
            {info.map((inf)=>{
                const {id,url,name, icon}=inf
                return(
                    <div key={id} className='info'>             
                    <li className='info__list'>
                       <a className='link__color' target="_blank" rel="noreferrer noopener" href={url} >
                         <span className='svg_info'>{icon} </span>  
                         <h4 className='info__text'>{name}</h4>
                       </a>
                    </li>   
                    </div>            
                )
            })}
            
        </>
    )
}

export default Info
