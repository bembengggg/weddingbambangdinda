import React from 'react';
import './Cover.css';
import cover from '../Cover/Cover1.jpg';

const Cover =()=>{
    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}></img>
           <div className='form'>
            <button className="btnopen">Open Invitation</button>
            </div>
         </div>



    

    )
}

export default Cover;