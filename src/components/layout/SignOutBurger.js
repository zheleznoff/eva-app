import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutBurger = () => {
    return(
        <ul className='sidenav' id='mobile-links'>
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>            
        </ul>
    )
}

export default SignOutBurger