import React from 'react';
import './Gallery.css';
import gallery from '../Gallery/bgimage.jpg';


const Gallery =()=>{
    return(
        <div className='wrap'>
           <img className='imgbg' src={gallery}/>
           <div className='slider'>
               <div className='thumbnail nail-1'>1</div>
               <div className='thumbnail nail-2'>2</div>
               <div className='thumbnail nail-3'>3</div>
               <div className='thumbnail nail-4'>4</div>
               <div className='thumbnail nail-5'>5</div>
               <div className='thumbnail nail-6'>6</div>
               <div className='thumbnail nail-7'>7</div>
               <div className='thumbnail nail-8'>8</div> 
               <div className='thumbnail nail-9'>9</div>
           </div>
         </div>
    

    )
}

export default Gallery;