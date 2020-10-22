import React, {Component} from 'react';
import NavBottom from '../../Component/NavBottom/NavBottom';
import Cover from '../../Component/Cover/Cover';
import container from '../Home/container.jpg';
import audio from '../../Assets/MP3/sepertiga.mp3';

import './Home.css';

class Home extends Component{
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
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
                 <div className='bksbtnudg'>
                
                    <button className="btnudg" onClick={this.playAudio} >  <span>BUKA UNDANGAN</span></button>
                    <audio className="audio-element">
                       <source src={audio}></source>
                    </audio>
                 </div>
            </div>
           
        )
    }
}

export default Home;