import React, {Component} from 'react';
import './Sampul.css';
import container from '../Sampul/container.jpg';
import audio from '../../Assets/MP3/sepertiga.mp3';
import NavBottom from '../../Component/NavBottom/NavBottom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';


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
           
          </div>    
    );}else {
      console.log(this.props)
        return (
          
          <div className='container'>
          <img className='buku' src={container}/>
          <div className='wrappernama'>
          <div className='bkslabelnama'>
              <div className='wrapperin'>
                  <label className='labelnama'>{this.props.match.params.nama}</label>
                
                  
                  <label className='labeltempat'>Di</label>
                  
                  
                  <label className='labeltempat'>{this.props.match.params.tempat}</label>
                  </div>
           </div>
           </div>
  
           <div className='bksbtnudg'>
  
           <Link to='/Cover'><button className="btnudg" onClick={this.playAudio} >  <span>BUKA UNDANGAN</span></button></Link>
              
           </div>
  
      </div>
        );
      }
}
}

export default Sampul;
