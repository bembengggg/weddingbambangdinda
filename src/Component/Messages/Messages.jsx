import React from 'react';
import './Messages.css';
import messages from '../Messages/bgimage.jpg';
import protap from '../Messages/protap.jpg';

const Messages =()=>{
    return(
        <div className='wrapcover'>
            <img className='img2' src={protap}/>
           <img className='img1' src={messages}/>
         </div>



    

    )
}

export default Messages;