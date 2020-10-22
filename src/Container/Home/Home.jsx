import React, {Component} from 'react';
import NavBottom from '../../Component/NavBottom/NavBottom';
import Cover from '../../Component/Cover/Cover';
import container from '../Home/container.jpg';

import './Home.css';

class Home extends Component{
    render(){
        return(
           
            <div className='container'>
                <img className='buku' src={container}/>
                <div className='bkslabelnama'>
                    <div>
                        <label className='labelnama'>Budi Sukarjo andarmono</label>
                        </div>
                        <div>
                        <label className='labeltempat'>Di</label>
                        </div>
                        <div>
                        <label className='labeltempat'>Bandar Lampung</label>
                        </div>
                 </div>
            </div>
           
        )
    }
}

export default Home;