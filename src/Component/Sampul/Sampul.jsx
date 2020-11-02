import React, {Component} from 'react';
import './Sampul.css';
import container from '../Sampul/container.jpg';
import audio from '../../Assets/MP3/sepertiga.mp3';
import NavBottom from '../../Component/NavBottom/NavBottom';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';


class Sampul extends Component{
        constructor(props) {
        super(props);
    this.state = {
        isActive: false, 
        play: false,
        pause: true,
      };

      

    this.audio = new Audio(audio);
        }
      
    playAudio=()=> {
        this.setState({ play: true, pause: false })
    this.audio.play();
        this.setState({
            isActive: true
          });

      }
      render(){
        if (this.state.isActive) {
    return(

          <div>
           <NavBottom/>
          </div>    
    );}else {
      
      console.log(this.props)
        return (
          
          <div className='container'>
          <img className='buku' src={container}/>
          <div className='wrappernama'>
          <div className='bkslabelnama'>
              <div className='wrapperin'>
                <div className='lblnm'>
                  <label className='labelnama'>{this.props.match.params.nama}</label>
                  </div>
                  <div className='lbltmpt'>
                  <label className='labeltempat'>Di</label>
                  </div>
                  <div className='lbltmptku'>
                  <label className='labeltempatku'>{this.props.match.params.tempat}</label>
                  </div>
                  </div>
           </div>
           </div>
  
           <div className='bksbtnudg'>
         <button className="btnudg" onClick={this.playAudio} >  <span>BUKA UNDANGAN</span></button>
              
           </div>
  
      </div>
        );
      }
}
}

export default Sampul;
