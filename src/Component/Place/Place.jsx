import React from 'react';
import './Place.css';
import place from '../Cover/bgimage.jpg';

const Place =()=>{

 


    return(
        <div className='wrapcover'>
           <img className='img2' src={place}/>
           <div className='bksrangkaian'>
                <div className='bksrangkaian1'>Rangkaian Acara</div>
           </div>
           <div className='bksrangkaianakad'>
               <div className='bksrangkaianakadborder'>   
                   </div>
               <div className='bksrangkaianakad1'>
                    <label className='txtakad'>Akad</label>
               </div>

                   <div className='bksrangkaianakadborder'>
                   
                   </div>
           </div>
           <div className='bksrangkaianakaddetail'>

           <div className='bksrangkaianakadborderdetail1'>   
            
            </div>
               <div className='bksrangkaianakaddetail1'>
                    <label className='txttanggal'>09</label>
               </div>

                   <div className='bksrangkaianakadborderdetail2'>
                   
                   </div>
           </div>



           <div className='form1'>
            <button className="btnopeng" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>View Map</button>
            </div>
         </div>



    

    )
}

export default Place;