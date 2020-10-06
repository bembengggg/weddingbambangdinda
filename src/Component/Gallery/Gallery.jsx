import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';

const Gallery =()=>{
    return(
        <div className='wrapcover'>
           <img className='img1' src={gallery}/>
         </div>



    

    )
}

export default Gallery;