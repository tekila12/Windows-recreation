import React from 'react'

function HoverIcons({id, name, url, img, icon, link}) {
    const[inHoverProject , setInHoverProject]= React.useState(false)

    return (      
        <div>
        <li
          onMouseLeave={() => setInHoverProject(false)}
          onMouseEnter={() => setInHoverProject(true)}
          key={id}
          className='list__Project'>
        <div className='project__text'>
          <a className='link__color' target="_blank" rel="noreferrer noopener" href={url}>
            <img className='smallProject__img' alt='projectsImage'src={img}/>            
            <h4 className='Small__icon'>{name}</h4>  
          </a>   
        </div>   
        <div className='project__hover'>
          {inHoverProject && <a target="_blank" rel="noreferrer noopener" href={link}>
        <svg>{icon}</svg>
        <div class="content">
        <div class="arrow"> 
        <div class="curve"></div>
        <div class="point"></div>
        </div>
        </div> </a>} 
        </div>                                                                       
        </li>
        </div>
    
    )
}

export default HoverIcons
