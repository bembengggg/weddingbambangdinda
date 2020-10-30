import React from 'react';
import './Couple.css';
// import couple from '../Couple/Wedding.jpg';
import couple from '../Cover/bgimage.jpg';
import bismillah from '../../Assets/image/bismillah.png';

const Couple =()=>{
    return(
        <div className='wrapcover'>
           <img className='img1' src={couple}/>
           <div className='htop'>
                <label className='htopl'>Bismillahirrahmanirrahim</label>
            </div>
            <div className='htopb'>
            <img className='htopimg' src={bismillah}/>
            </div>
         </div>



    

    )
}

export default Couple;