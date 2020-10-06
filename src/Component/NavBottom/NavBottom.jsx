import React, {Component,Fragment} from 'react';
import './NavBottom.css';
import { faHome,faImages,faHeart,faQrcode,faMapMarkerAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Cover from '../Cover/Cover';
import Couple from '../Couple/Couple';

class NavBottom extends Component{
    render(){
        return(
            <Router>
                <Fragment>
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
            <Route path="/" exact component={Cover}/>
            <Route path="/Couple" component={Couple}/>
            </Fragment>
            </Router>
     
        )
    }
}



export default NavBottom;