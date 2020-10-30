import React from 'react';
import './Couple.css';
// import couple from '../Couple/Wedding.jpg';
import couple from '../Cover/bgimage.jpg';
import bismillah from '../../Assets/image/bismillah.png';
import dinda from '../../Assets/image/dinda.PNG';
import bambang from '../../Assets/image/bambang.PNG';
import list from '../../Assets/image/list.png';


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
                <label className='txtbpk'>BAPAK/IBU/SAUDARA/I ACARA RESEPSI PERNIKAHAN</label>
            </div>
            <div className='htopb'>
            <img className='htopimg' src={bismillah}/>
            </div>
            
            <div className='wrappingimg'>
                <img className='imgw' src={dinda}/>
            </div>
            <div className='animasitext'>
            <div className='htopw'>
                <label className='txtw'>ADINDA RIZKI FITRIANISA,S.Tr.Keb.</label>
            </div>
            <div className='htoplistw'>
            <img className='imglistw' src={list}/>
            </div>
            <div className='htopwptk'>
                <label className='txtptk'>PUTRI KEDUA</label>
            </div>
            <div className='htopwbpk'>
                <label className='txtwbpk'>Bapak Agus Heryanto,Bc.Ip.,S.H.,MH</label>
            </div>
            <div className='htopwibu'>
                <label className='txtwibu'>Ibu Ita Deswita</label>
            </div>
            </div>
            <div className='htopand'>
                <label className='txtand'>&amp;</label>
            </div>
             <div className='wrappingimgl'>
                <img className='imgl' src={bambang}/>
            </div>
            <div className='animasitextl'>
            <div className='htoplptk'>
                <label className='txtlptk'>PUTRA KEEMPAT</label>
            </div>
            <div className='htopl'>
                <label className='txtl'>BAMBANG KURNIAWAN WIBOWO,S.Kom</label>
            </div>
            <div className='htoplistl'>
            <img className='imglistl' src={list}/>
            </div>
            <div className='htoplbpk'>
                <label className='txtlbpk'>Bapak Supriyanto(Alm)</label>
            </div>
            <div className='htoplibu'>
                <label className='txtlibu'>Ibu Nurwilis</label>
            </div> 
            </div>
         </div>



    

    )
}

export default Couple;