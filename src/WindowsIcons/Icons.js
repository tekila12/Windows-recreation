import React from 'react'

    const Icons= ({id, name, url, git, img, link}) => {
      const [inHoverIcons, setHoverIcons] = React.useState(false);
        return (
            
            <div onMouseEnter={() => setHoverIcons(true)}
                 onMouseLeave={() => setHoverIcons(false)} className='windows__icon' >
                <li  className='windows__list' key={id}>
                 <a className='link__color' target="_blank" rel="noreferrer noopener" href={url}>
                  <img className='windows__image' alt='windows__image' src={img}/>                                                        
                   <h4 className='windows__text'>{name}</h4>                   
                 </a>
                </li>           
            <div className='windows__hover'>
             <a  target="_blank" rel="noreferrer noopener" href={link}>
             <svg >{git}</svg>
             
             
              </a>
              </div> 
            </div>
        )
    }
    export default Icons


