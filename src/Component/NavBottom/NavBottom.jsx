import React, {Component,Fragment} from 'react';
import './NavBottom.css';
import { faHome,faImages,faHeart,faQrcode,faMapMarkerAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Cover from '../Cover/Cover';
import Couple from '../Couple/Couple';
import Gallery from '../Gallery/Gallery';
import Messages from '../Messages/Messages';
import Place from '../Place/Place';
import audio from '../../Assets/MP3/sepertiga.mp3';



class NavBottom extends Component{
    componentDidMount() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render(){
        return(
            <Router>
                <Fragment>
                    <Route path="/" exact component={Cover}/>
                    <Route path="/Couple" component={Couple}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/Place" component={Place}/>
                    <Route path="/Messages" component={Messages}/> 
                    <audio className="audio-element">
          <source src={audio}></source>
        </audio>
                        <nav className="nav">
                             <Link to="/" className="nav__link">
                                 <FontAwesomeIcon icon={faHome}  className="nav__icon" />
                                    <span class="nav__text">HOME</span>
                             </Link>   
                             <Link to="/Couple" className="nav__link">
                                  <FontAwesomeIcon icon={faHeart}  className="nav__icon" />
                                    <span class="nav__text">COUPLE</span>
                             </Link>  
                             <Link to="/Place" className="nav__link">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}  className="nav__icon" />
                                     <span class="nav__text">PLACE</span>
                             </Link>  
                            <Link to="/Gallery" className="nav__link">
                                    <FontAwesomeIcon icon={faImages}  className="nav__icon" />
                                    <span class="nav__text">GALLERY</span>
                            </Link> 
                            <Link to="/Messages" className="nav__link">
                                    <FontAwesomeIcon icon={faEnvelope}  className="nav__icon" />
                                    <span class="nav__text">MESSAGES</span>
                            </Link>    
                            </nav>
                </Fragment>
            </Router>
     
        )
    }
}



export default NavBottom;