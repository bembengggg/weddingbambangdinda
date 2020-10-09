import React from 'react';
import './Place.css';
import place from '../Place/Place.jpg';

const Cover =()=>{

 


    return(
        <div className='wrapcover'>
           <img className='img1' src={place}/>
           <div className='form'>
            <button className="btnopen" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>OPEN GOOGLE MAP</button>
            </div>
         </div>



    

    )
}

export default Cover;