import React from 'react'
import './Computer.css'
const Monitor = ({backgroundColor}) => {

  
    console.log(backgroundColor)
    return (
       <div className='Monitor'>
           <div className='monitor__screen' >
            <span className={backgroundColor ? `backgroundColor` : 'monitor__sides' }>
            
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
