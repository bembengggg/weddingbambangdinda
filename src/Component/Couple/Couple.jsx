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
                <label className='txtb'>Bismillahirrahmanirrahim</label>
            </div>
            <div className='htopas'>
                <label className='txtas'>Assalamu’alaikum warahmatullahi wabarakatuh</label>
            </div>
            <div className='htopudg'>
                <label className='txtudg'>DENGAN MEMOHON RAHMAT ALLAH SWT, KAMI MENGUNDANG</label>
            </div>
            <div className='htopbpk'>
                <label className='txtbpk'>BAPAK/IBU/SAUDARA/i ACARA RESEPSI PERNIKAHAN</label>
            </div>
            <div className='htopb'>
            <img className='htopimg' src={bismillah}/>
            </div>
         </div>



    

    )
}

export default Couple;