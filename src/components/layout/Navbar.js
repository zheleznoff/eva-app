import React,{ useEffect } from 'react'; 
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import SignInBurger from './SignInBurger';
import SignOutBurger from './SignOutBurger';
import {connect} from 'react-redux';
import {isLoaded} from 'react-redux-firebase';
import M from  'materialize-css/dist/js/materialize.min.js';


const Navbar = (props) => {
    const {auth,profile} = props;
    const links = auth.uid ? <SignInLinks profile={profile}/> : <SignOutLinks/> ; 
    const burger = auth.uid ? <SignInBurger profile={profile}/> : <SignOutBurger/> ; 
    useEffect(() => {
        let sidenav = document.querySelector('#mobile-links');
        M.Sidenav.init(sidenav, {});
    });
    return(
        <div>
            <nav className='nav-wrapper blue darken-3'>
                <div className='container'>                    
                    <Link to='/' className='brand-logo'>Eva app</Link>
                    <Link to='#' data-target="mobile-links" className="sidenav-trigger show-on-small"><i className="material-icons">menu</i></Link>                
                    {isLoaded(auth) && links}
                </div>
            </nav>  
            {burger}          
        </div>
        
    )
}

const mapStateToProps = (state) => {      
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps)(Navbar)