import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInBurger = (props) => {    
    return(
        <ul className='sidenav' id='mobile-links'>
            <li>
                <NavLink to='/' className='pink-text'>
                    {props.profile.initials}
                </NavLink>
            </li>
            <li><NavLink to='/create'>New project</NavLink></li>
            <li><Link to='/' onClick={props.signOut}>Log out</Link></li>            
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignInBurger)