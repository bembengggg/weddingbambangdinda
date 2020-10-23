import React, {Component} from 'react';
import './Sampul.css';
import container from '../Sampul/container.jpg';
import audio from '../../Assets/MP3/sepertiga.mp3';
import NavBottom from '../../Component/NavBottom/NavBottom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


class Sampul extends Component{
    state = {
        isActive: false
      };
    playAudio=()=> {
        // const audioEl = document.getElementsByClassName("audio-element")[0]
        // audioEl.play()
        this.setState({
            isActive: true
          });

      }
      render(){
        if (this.state.isActive) {
    return(

          <div>
           
          </div>    
    );}else {
        return (
          
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
  
           <div className='bksbtnudg'>
  
           <Link to='cover'><button className="btnudg" onClick={this.playAudio} >  <span>BUKA UNDANGAN</span></button></Link>
              
           </div>
  
      </div>
        );
      }
}
}

export default Sampul;
