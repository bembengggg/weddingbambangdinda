import React from 'react';
import './Cover.css';
import cover from '../Cover/Cover1.jpg';

const Cover =()=>{

      var gapi = window.gapi;
      var CLIENT_ID=" 922700239463-3k9pjqpsimbq406enrtg0irqdjjohpcs.apps.googleusercontent.com ";
      var API_KEY=" AIzaSyC9X8uYRb6qMOz3mfBoKIedv_e1YUuFC6M";
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
      var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
 
    function handleClick() {
            gapi.load('client:auth2',()=>{
                console.log('gapi client is loading')
                
                gapi.client.init({
                    apikey: API_KEY,
                    clientid: CLIENT_ID,
                    discoveryDocs:DISCOVERY_DOCS,
                    scope: SCOPES,
                })
                gapi.client.load('calendar','v3', () =>console.log('Damn!!'))
                // gapi.auth2.getAuthInstance().signIn()
                console.log(gapi.auth2.getAuthInstance())
            })
       }

    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}/>
           <div className='form'>
            <button className="btnopens" onClick={handleClick}>SAVE THE DATE</button>
            </div>
         </div>



    

    )
}

export default Cover;