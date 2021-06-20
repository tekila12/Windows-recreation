import React from 'react'
import AvastButton from './AvastButton'

const Avast=({closeAvast})=> {
    return (     
            <div className='avast'>        
              <img src='./images/icons/avastSmall.png' />             
                 <AvastButton closeAvast={closeAvast} />                           
            </div>                                        
    )
}

export default Avast;