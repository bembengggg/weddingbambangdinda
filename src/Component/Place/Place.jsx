import React from 'react';
import './Place.css';
import place from '../Place/Place.jpg';

const Cover =()=>{

 


    return(
        <div className='wrapcover'>
           <img className='img2' src={place}/>
           <div className='form1'>
            <button className="btnopeng" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>Open Google Map</button>
            </div>
         </div>



    

    )
}

export default Cover;