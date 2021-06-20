import React from 'react'
import {Link
  } from "react-router-dom";


const GuestPage = () => {
 

    return (
        <div className='guestPage'>
            <div className='guestLogin'>             
                <Link  to='/App'>             
                   <img className='guest__image' src='./images/icons/Ajnur.jpg' alt=''/>
                   <h4 className='guest__text'>Home</h4>
                   <button className='guest__button'>Browse as guest</button>
                </Link>
            </div>
        </div>
    )
}

export default GuestPage
