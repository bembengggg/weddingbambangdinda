import React, {Component} from 'react';
import NavBottom from '../../Component/NavBottom/NavBottom';
import place from '../../Component/Place/Place';
import Sampul from '../../Component/Sampul/Sampul';
// import Place from '../../Component/Place/Place';

import NOT from '../Home/PageNotFound';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './Home.css';
import Place from '../../Component/Place/Place';

class Home extends Component{
   
    render(){
        return(
            <div className='container'>
            <Router>
            <Route path="/:nama/:tempat"   render={props=><Sampul{...props}/>}/>
            
            
            <Route path="/" exact  component={NOT}/>
            </Router>
            </div>
            // <Router>
        
       
            // <Route path="/navbottom"   component={NavBottom}/>  
            // </Router>
     
           
        )
    }
}

export default Home;