import React from 'react';
import './Cover.css';
import cover from '../Cover/Cover1.jpg';

const Cover =()=>{

      var gapi = window.gapi
      var CLIENT_ID=" 922700239463-3k9pjqpsimbq406enrtg0irqdjjohpcs.apps.googleusercontent.com "
      var API_KEY=" AIzaSyC9X8uYRb6qMOz3mfBoKIedv_e1YUuFC6M"
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
      var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
 
    function handleClick() {
            alert("sedang dalam perbaikan")
       }

    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}/>
           <div className='form'>
            <button className="btnopen" onClick={handleClick}>SAVE THE DATE</button>
            </div>
         </div>



    

    )
}

export default Cover;