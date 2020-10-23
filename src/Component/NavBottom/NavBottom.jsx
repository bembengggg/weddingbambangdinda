import React, {Component,Fragment} from 'react';
import './NavBottom.css';
import { faHome,faImages,faHeart,faQrcode,faMapMarkerAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Cover from '../Cover/Cover';
import Couple from '../Couple/Couple';
import Gallery from '../Gallery/Gallery';
import Messages from '../Messages/Messages';
import Sampul from '../Sampul/Sampul';
import Place from '../Place/Place';
import audio from '../../Assets/MP3/sepertiga.mp3';
// import NavBottom from '../../Component/NavBottom/NavBottom';





class NavBottom extends Component{
    render(){
        return(
            <Router>   
                                             
                <Fragment>
                    <Route path="/Home" component={Cover}/>
                    <Route path="/Cover" component={Cover}/>
                    <Route path="/Couple" component={Couple}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/Place" component={Place}/>
                    <Route path="/Messages" component={Messages}/>
                    
                        <nav className="nav">
                             <Link to="/Home" className="nav__link">
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
                            <Sampul /> 
                </Fragment>
          
            </Router>
     
        )
    }
}



export default NavBottom;