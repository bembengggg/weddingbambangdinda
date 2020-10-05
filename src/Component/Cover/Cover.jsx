import React from 'react';
import './Cover.css';
import cover from '../Cover/Cover1.jpg';

const Cover =()=>{
    return(
        <div className='wrapcover'>
           <img className='img1' src={cover}/>
           <div className='form'>
            <button className="btnopen" onclick="window.location.href='https://calendar.google.com/event?action=TEMPLATE&tmeid=NTVtbzIzaGpxbXFmZG5kbXE1bXZkNWt0cG1fMjAyMTAxMDlUMDkwMDAwWiBiYW1iYW5nLmt1cm5pYXdhbkB3YW5zb2x1dGlvbnMuY28uaWQ&tmsrc=bambang.kurniawan%40wansolutions.co.id&scp=ALL';">SAVE THE DATE</button>
            <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MWczYnByYjFvbDhtN2dhMnQxMnNpNjRiMGwgYmVtYmVuZ2dnQG0&tmsrc=bembenggg%40gmail.com">test</a>
            </div>
         </div>



    

    )
}

export default Cover;