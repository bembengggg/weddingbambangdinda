import React from 'react';
import './Cover.css';
import cover from '../Cover/bgimage.jpg';

class Cover extends Component{

    constructor(props) {
        super(props);
        // Pre-bind your event handler, or define it as a fat arrow in ES7/TS
        this.handleNVFocus = this.handleNVFocus.bind(this);
        this.handleNVEnter = this.handleNVEnter.bind(this);
        this.handleNVRight = this.handleNVRight.bind(this);
      }
    
      handleNVFocus = event => {
          alert('Focused: ' + this.props.menuItem.caption.toUpperCase());
      }
    
      handleNVEnter = event => {
          alert('Enter: ' + this.props.menuItem.caption.toUpperCase());
      }
    
      handleNVRight = event => {
          alert('Right: ' + this.props.menuItem.caption.toUpperCase());
      }
    
      componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('nv-focus', this.handleNVFocus);
        ReactDOM.findDOMNode(this).addEventListener('nv-enter', this.handleNVEnter);
        ReactDOM.findDOMNode(this).addEventListener('nv-right', this.handleNVEnter);
        //this.refs.nv.addEventListener('nv-focus', this.handleNVFocus);
        //this.refs.nv.addEventListener('nv-enter', this.handleNVEnter);
        //this.refs.nv.addEventListener('nv-right', this.handleNVEnter);
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