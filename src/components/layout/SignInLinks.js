import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInLinks = (props) => {    
    return(
        <ul className='right hide-on-med-and-down'>
            <li><NavLink to='/create'>New project</NavLink></li>
            <li><Link to='/' onClick={props.signOut}>Log out</Link></li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignInLinks)