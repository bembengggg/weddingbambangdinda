import React from 'react';
import './NavBottom.css';
import { faHome,faImages,faHeart,faQrcode,faMapMarkerAlt,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavBottom =()=>{
    return(   
        <nav className="nav">
                <a href="#" className="nav__link">
                     <FontAwesomeIcon icon={faHome}  className="nav__icon" />
                        <span class="nav__text">HOME</span>
                 </a>   
                <a href="#" className="nav__link">
                    <FontAwesomeIcon icon={faHeart}  className="nav__icon" />
                        <span class="nav__text">COUPLE</span>
                </a>  
                <a href="#" className="nav__link">
                    <FontAwesomeIcon icon={faMapMarkerAlt}  className="nav__icon nav__link--active" />
                        <span class="nav__text">PLACE</span>
                </a>  
                 <a href="#" className="nav__link">
                    <FontAwesomeIcon icon={faImages}  className="nav__icon" />
                        <span class="nav__text">GALLERY</span>
                </a> 
                <a href="#" className="nav__link">
                    <FontAwesomeIcon icon={faEnvelope}  className="nav__icon" />
                        <span class="nav__text">MESSAGES</span>
                </a>    
                </nav>
                
                )
}

export default NavBottom;