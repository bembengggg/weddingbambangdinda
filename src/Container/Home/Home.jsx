import React, {Component} from 'react';
import NavBottom from '../../Component/NavBottom/NavBottom';
import Cover from '../../Component/Cover/Cover';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './Home.css';

class Home extends Component{
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()

      }
    render(){
        return(
            <NavBottom/>
            // <Router>
        
       
            // <Route path="/navbottom"   component={NavBottom}/>  
            // </Router>
     
           
        )
    }
}

export default Home;