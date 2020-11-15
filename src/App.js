import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import PrivateRoute from './PrivateRoute';
import './styles/style.css';



const App = () => {  
    return (
      <BrowserRouter>         
          <Navbar/>
          <Switch>
            <PrivateRoute  exact path='/' component={Dashboard}/>
            <PrivateRoute  path='/project/:id' component={ProjectDetail}/>
            <Route path='/signin' component={SignIn}/>  
            <Route path='/signup' component={SignUp}/>    
            <PrivateRoute path='/create' component={CreateProject}/>        
          </Switch>      
      </BrowserRouter>        
    )   
}

export default App;
