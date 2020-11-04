import React from 'react';
import './Place.css';
import place from '../Cover/bgimage.jpg';
import list from '../../Assets/image/list.png';

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
                     <div className='bkshari'>
                        <label className='txthari'>SABTU</label>
                    </div>
                    <div className='bkshari'>
                    <img className='imgharilist' src={list}/>
                    </div>    
                    <div className='bkshari'>
                        <label className='txtpkl'>16.00 S/D 17.00 WIB</label>
                    </div>   
            </div>
               <div className='bksrangkaianakadborderdetail2'>
                    <label className='txttanggal'>09</label>
               </div>

                   <div className='bksrangkaianakadborderdetail3'>
                   <div className='bkshari'>
                        <label className='txtbulan'>JANUARY</label>
                    </div>
                    <div className='bkshari'>
                    <img className='imgtahunlist' src={list}/>
                    </div>     
                    <div className='bkshari'>
                        <label className='txttahun'>2021</label>
                    </div> 
                   </div>
           </div>

           {/* <div className='bksrangkaianjalanakad'>
                <div className='bksrangkaianjalanakad1'><b>SASONO MULYO - DEPOK</b></div>
           </div>
           <div className='bksrangkaianjalandetailakad'>
                <div className='bksrangkaianjalandetailakad1'>Jl. Jatimulya (Kalimulya) No. 30, Cilodong, Depok Jawa Barat</div>
           </div>
           
           <div className='bksrangkaianresepsi'>
               <div className='bksrangkaianresepsiborder'>   
                   </div>
               <div className='bksrangkaianresepsi1'>
                    <label className='txtresepsi'>Resepsi</label>
               </div>

                   <div className='bksrangkaianresepsiborder'>
                   
                   </div>
           </div>
           <div className='bksrangkaianresepsidetail'>

           <div className='bksrangkaianresepsiborderdetail1'> 
                    <div className='bkshariresepsi'>
                        <label className='txthariresepsi'>SABTU</label>
                    </div>
                    <div className='bkshariresepsi'>
                    <img className='imgtahunresepsilist' src={list}/>
                    </div>    
                    <div className='bkshariresepsi'>
                        <label className='txtpklresepsi'>19.00 S/D 20.00 WIB</label>
                    </div>  
            </div>
               <div className='bksrangkaianresepsiborderdetail2'>
                    <label className='txttanggalresepsi'>09</label>
               </div>

                   <div className='bksrangkaianresepsiborderdetail3'>
                   <div className='bkshariresepsi'>
                        <label className='txtbulanresepsi'>JANUARY</label>
                    </div>
                    <div className='bkshariresepsi'>
                    <img className='imgtahunresepsilist' src={list}/>
                    </div>    
                    <div className='bkshariresepsi'>
                        <label className='txttahunresepsi'>2021</label>
                    </div> 
                   </div>
           </div>
           <div className='bksrangkaianjalanresepsi'>
                <div className='bksrangkaianjalanresepsi'><b>SASONO MULYO - DEPOK</b></div>
           </div>
           <div className='bksrangkaianjalandetailresepsi'>
                <div className='bksrangkaianjalandetailresepsi'>Jl. Jatimulya (Kalimulya) No. 30, Cilodong, Depok Jawa Barat</div>
           </div> */}


           <div className='form1'>
            <button className="btnopeng" onClick={event =>  window.location.href='https://goo.gl/maps/xvyf6YvwSCZGx3D49'}>View Map</button>
            </div>
         </div>



    

    )
}

export default Place;