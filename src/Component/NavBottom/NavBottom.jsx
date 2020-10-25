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
                
                    <Route path="/:nama/:tempat/Home" component={Cover}/>
                    <Route path="/:nama/:tempat/Cover" component={Cover}/>
                    <Route path="/:nama/:tempat/Couple" component={Couple}/>
                    <Route path="/:nama/:tempat/Gallery" component={Gallery}/>
                    <Route path="/:nama/:tempat/Place" component={Place}/>
                    <Route path="/:nama/:tempat/Messages" component={Messages}/>
                    
                        <nav className="nav">
                             <Link to="/:nama/:tempat/Home" className="nav__link">
                                 <FontAwesomeIcon icon={faHome}  className="nav__icon" />
                                    <span class="nav__text">HOME</span>
                             </Link>   
                             <Link to="/:nama/:tempat/Couple" className="nav__link">
                                   <FontAwesomeIcon icon={faHeart}  className="nav__icon" />
                                    <span class="nav__text">COUPLE</span>
                             </Link>  
                             <Link to="/:nama/:tempat/Place" className="nav__link">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}  className="nav__icon" />
                                     <span class="nav__text">PLACE</span>
                             </Link>  
                            <Link to="/:nama/:tempat/Gallery" className="nav__link">
                                    <FontAwesomeIcon icon={faImages}  className="nav__icon" />
                                    <span class="nav__text">GALLERY</span>
                            </Link> 
                            <Link to="/:nama/:tempat/Messages" className="nav__link">
                                    <FontAwesomeIcon icon={faEnvelope}  className="nav__icon" />
                                    <span class="nav__text">MESSAGES</span>
                            </Link>    
 
                            </nav> 
                </Fragment>
                <Route path="/:nama/:tempat" exact component={Sampul}/>
          
            </Router>
     
        )
    }
}



export default NavBottom;