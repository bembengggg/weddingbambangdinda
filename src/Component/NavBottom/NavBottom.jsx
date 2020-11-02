import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './NavBottom.css';
import { faHome,faImages,faHeart,faQrcode,faMapMarkerAlt,faEnvelope,faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Cover from '../Cover/Cover';
import Couple from '../Couple/Couple';
import Gallery from '../Gallery/Gallery';
import Messages from '../Messages/Messages';
import Sampul from '../Sampul/Sampul';
import Place from '../Place/Place';
import audio from '../../Assets/MP3/sepertiga.mp3';
// import NavBottom from '../../Component/NavBottom/NavBottom';





class NavBottom extends Component{
    constructor() {
        super();
        this.state = {
          showHideDemo1: true,
          showHideDemo2: false,
          showHideDemo3: false,
          showHideDemo4: false,
          showHideDemo5: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }
        
      hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideDemo1":
            this.setState({ showHideDemo1: !this.state.showHideDemo1 });
            this.setState({showHideDemo2: false  });
            this.setState({showHideDemo3: false  });
            this.setState({showHideDemo4: false  });
            this.setState({showHideDemo5: false  });
            break;
          case "showHideDemo2":
            this.setState({ showHideDemo2: !this.state.showHideDemo2 });
            this.setState({showHideDemo1: false  });
            this.setState({showHideDemo3: false  });
            this.setState({showHideDemo4: false  });
            this.setState({showHideDemo5: false  });
            break;
          case "showHideDemo3":
            this.setState({ showHideDemo3: !this.state.showHideDemo3 });
            this.setState({showHideDemo1: false  });
            this.setState({showHideDemo2: false  });
            this.setState({showHideDemo4: false  });
            this.setState({showHideDemo5: false  });
            break;
            case "showHideDemo4":
                this.setState({ showHideDemo4: !this.state.showHideDemo4 });
                this.setState({showHideDemo1: false  });
                this.setState({showHideDemo2: false  });
                this.setState({showHideDemo3: false  });
                this.setState({showHideDemo5: false  });
                break;
          case "showHideDemo5":
                    this.setState({ showHideDemo5: !this.state.showHideDemo5 });
                    this.setState({showHideDemo1: false  });
                    this.setState({showHideDemo2: false  });
                    this.setState({showHideDemo3: false  });
                    this.setState({showHideDemo4: false  });
                    break;
        }
      }
    render(){
        const { showHideDemo1, showHideDemo2, showHideDemo3,showHideDemo4,showHideDemo5 } = this.state;
        return(
            <Router>                            
            {showHideDemo1 && <Cover />}
            {showHideDemo2 && <Couple />}
            {showHideDemo3 && <Place />}
            {showHideDemo4 && <Gallery />}
            {showHideDemo5 && <Messages />}

                    
                        <nav className="nav">
                             <Link onClick={() => this.hideComponent("showHideDemo1")} className="nav__link">
                                 <FontAwesomeIcon icon={faHome}  className="nav__icon" />
                                    <span class="nav__text">HOME</span>
                             </Link>   
                             <Link  onClick={() => this.hideComponent("showHideDemo2")} className="nav__link">
                                   <FontAwesomeIcon icon={faHeart}  className="nav__icon" />
                                    <span class="nav__text">COUPLE</span>
                             </Link>  
                             <Link  onClick={() => this.hideComponent("showHideDemo3")} className="nav__link">
                                    <FontAwesomeIcon icon={faTags}  className="nav__icon" />
                                     <span class="nav__text">EVENT</span>
                             </Link>  
                            <Link  onClick={() => this.hideComponent("showHideDemo4")} className="nav__link">
                                    <FontAwesomeIcon icon={faImages}  className="nav__icon" />
                                    <span class="nav__text">GALLERY</span>
                            </Link> 
                            <Link  onClick={() => this.hideComponent("showHideDemo5")} className="nav__link">
                                    <FontAwesomeIcon icon={faEnvelope}  className="nav__icon" />
                                    <span class="nav__text">MESSAGES</span>
                            </Link>    
 
                            </nav> 
                
                
                
          
            </Router>
     
        )
    }
}



export default NavBottom;