import React, {Component} from 'react';
import NavBottom from '../../Component/NavBottom/NavBottom';
import Cover from '../../Component/Cover/Cover';

import './Home.css';

class Home extends Component{
    render(){
        return(
           
            <div className='container'>
                <Cover/>
                <Cover/>
                <NavBottom/>
                
                
            </div>
        )
    }
}

export default Home;