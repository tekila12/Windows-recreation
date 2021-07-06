import React from 'react'
import './Computer.css'
const Monitor = ({backgroundColor, streching}) => {

  
console.log(backgroundColor)
console.log(streching)

    return (
       <div className='Monitor'>
           <div className='monitor__screen' >
            <span className={backgroundColor ? `backgroundColor monitor__sides ` : 'monitor__sides' }>
            <div className={ streching ? `saving streching ` : 'savings'}><p className="saving">Booting<span>.</span><span>.</span><span>.</span></p>
             </div>
                <div className='samsung__bottom'>
                  <h2>Samsung</h2>  
                </div>               
            </span>
            <div className='monitor__handle'>
            </div>
            <div className='monitor__handleLine'>
            </div>    
        </div>   
       </div>
         
   
        
    )
}

export default Monitor
