import React from 'react'
import {data} from "../../database"
const Menu = () => {
    return (
        <div className='menu'>
             {data.menu.map((icon)=>{
                const {id, url ,name, img} = icon;
                return (
                <div key={id} className='menu__cont '>
                 <span className='menu__icon' >
                    <div className='menu__info'>
                     <a className='menu__link'target="_blank"
                        rel="noreferrer noopener" href={url}>                  
                       <img className='menu__image' src={img}/>                                                        
                       <h4 className='menu__text'>{name}</h4>                   
                     </a>
                    </div>                 
                  </span>     
                </div>
                 )                     
                })}                    
        </div>    
    )
}
export default Menu
