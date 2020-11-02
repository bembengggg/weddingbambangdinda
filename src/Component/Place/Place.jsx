import React from 'react';
import './Place.css';
import place from '../Cover/bgimage.jpg';

const Place =()=>{

 


    return(
        <div className='wrapcover'>
           <img className='img2' src={place}/>
           <div className='bksakad'></div>


           <div className='form1'>
            <button className="btnopeng" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>View Map</button>
            </div>
         </div>



    

    )
}

export default Place;