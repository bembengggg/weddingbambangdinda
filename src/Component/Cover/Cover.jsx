import React from 'react';
import './Cover.css';
import cover from '../Cover/bgimage.jpg';

const Cover =()=>{

      var gapi = window.gapi;
      var CLIENT_ID="309104866685-27ukuktcp5rsktsrlf4hu7ch7h1muccv.apps.googleusercontent.com";
      var API_KEY=" AIzaSyAl5xTz0N8YIPJGg9NQSHPhLBAvEJ--tzo";
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
                gapi.client.load('calendar','v3', () => console.log('Damn!!'))
                gapi.auth2.getAuthInstance().signIn()
              

            })
       }

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

export default Cover;