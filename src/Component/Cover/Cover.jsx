import React from 'react';
import './Cover.css';
import cover from '../Cover/Cover1.jpg';

const Cover =()=>{
    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}/>
           <div className='form'>
            <button className="btnopen">SAVE THE DATE</button>
            <a class="to-maps" href="https://www.google.com/maps/place/Sasono+Mulyo+Depok,+Jl.+Raya+Kalimulya+No.30,+Jatimulya,+Kec.+Cilodong,+Kota+Depok,+Jawa+Barat+16413/@-6.4462555,106.8263909,16z/data=!4m2!3m1!1s0x2e69ea1974914827:0xe798a950aa08eae2?hl=id&gl=ID">
	Direction Maps
	</a>
            </div>
         </div>



    

    )
}

export default Cover;