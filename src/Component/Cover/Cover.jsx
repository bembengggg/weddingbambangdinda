import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Cover.css';
import cover from '../Cover/bgimage.jpg';


class Cover extends Component{

    constructor(props) {
        super(props);


        
    }
      render(){
    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}/>
           <div className='form7'>
                <label className='labeljudul'>Are Getting Married</label>
            </div>
           <div className='form8'>
                <label className='labelnpw'>Adinda Rizki Fitrianisa</label>
            </div>
            <div className='form10'>
                <label className='labelnpl'>Bambang Kurniawan Wibowo</label>
            </div>
            <div className='form9'>
                <label className='labeland'>&amp;</label>
            </div>
            <div className='form11'>
                <label className='labeltgl'>09.January.2021 | Sasono Mulyo</label>
            </div>
         
         </div>



    

    )
}
}
export default Cover;